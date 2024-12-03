"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoCircledIcon } from "@radix-ui/react-icons"

interface InputValues {
  urineSodium: string
  serumSodium: string
  urineCreatinine: string
  serumCreatinine: string
}

export function FenaCalculator() {
  const [values, setValues] = useState<InputValues>({
    urineSodium: '',
    serumSodium: '',
    urineCreatinine: '',
    serumCreatinine: ''
  })
  const [fena, setFena] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const calculateFena = () => {
    const UNa = parseFloat(values.urineSodium)
    const SNa = parseFloat(values.serumSodium)
    const UCr = parseFloat(values.urineCreatinine)
    const SCr = parseFloat(values.serumCreatinine)

    if (isNaN(UNa) || isNaN(SNa) || isNaN(UCr) || isNaN(SCr)) {
      setError('Please enter valid numbers for all fields')
      setFena(null)
      return
    }

    if (SNa === 0 || SCr === 0) {
      setError('Serum values cannot be zero')
      setFena(null)
      return
    }

    const result = (UNa * SCr) / (SNa * UCr) * 100
    setFena(result)
    setError('')
  }

  const handleInputChange = (field: keyof InputValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setValues(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleReset = () => {
    setValues({
      urineSodium: '',
      serumSodium: '',
      urineCreatinine: '',
      serumCreatinine: ''
    })
    setFena(null)
    setError('')
  }

  const interpretResult = (fena: number): { title: string; description: string } => {
    if (fena < 1) {
      return {
        title: "Pre-renal AKI likely",
        description: "FENa < 1% suggests pre-renal acute kidney injury (volume responsive)"
      }
    } else {
      return {
        title: "Intrinsic renal AKI likely",
        description: "FENa > 1% suggests intrinsic renal acute kidney injury"
      }
    }
  }

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="urineSodium">Urine Sodium (U<sub>Na</sub>)</Label>
            <div className="relative">
              <Input
                id="urineSodium"
                type="text"
                placeholder="Enter value"
                value={values.urineSodium}
                onChange={handleInputChange('urineSodium')}
              />
              <span className="absolute right-3 top-2 text-sm text-muted-foreground">mEq/L</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serumSodium">Serum Sodium (S<sub>Na</sub>)</Label>
            <div className="relative">
              <Input
                id="serumSodium"
                type="text"
                placeholder="Enter value"
                value={values.serumSodium}
                onChange={handleInputChange('serumSodium')}
              />
              <span className="absolute right-3 top-2 text-sm text-muted-foreground">mEq/L</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="urineCreatinine">Urine Creatinine (U<sub>Cr</sub>)</Label>
            <div className="relative">
              <Input
                id="urineCreatinine"
                type="text"
                placeholder="Enter value"
                value={values.urineCreatinine}
                onChange={handleInputChange('urineCreatinine')}
              />
              <span className="absolute right-3 top-2 text-sm text-muted-foreground">mg/dL</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serumCreatinine">Serum Creatinine (S<sub>Cr</sub>)</Label>
            <div className="relative">
              <Input
                id="serumCreatinine"
                type="text"
                placeholder="Enter value"
                value={values.serumCreatinine}
                onChange={handleInputChange('serumCreatinine')}
              />
              <span className="absolute right-3 top-2 text-sm text-muted-foreground">mg/dL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button onClick={calculateFena} className="flex-1">Calculate FENa</Button>
        <Button onClick={handleReset} variant="outline" className="flex-1">Reset</Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {fena !== null && !error && (
        <div className="mt-6 space-y-4">
          <Alert>
            <InfoCircledIcon className="h-4 w-4" />
            <AlertTitle>Result</AlertTitle>
            <AlertDescription>
              FENa = {fena.toFixed(2)}%
            </AlertDescription>
          </Alert>

          <Alert className={fena < 1 ? "bg-green-50" : "bg-yellow-50"}>
            <InfoCircledIcon className="h-4 w-4" />
            <AlertTitle>{interpretResult(fena).title}</AlertTitle>
            <AlertDescription>
              {interpretResult(fena).description}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  )
}