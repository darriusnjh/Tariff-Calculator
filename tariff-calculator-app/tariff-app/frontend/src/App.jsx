import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calculator, DollarSign, Globe, Package } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    originCountry: '',
    destinationCountry: '',
    productCategory: '',
    itemValue: ''
  })
  
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const countries = [
    'USA', 'Canada', 'Mexico', 'UK', 'China'
  ]

  const productCategories = [
    'Electronics', 'Clothing', 'Food'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setError('')
  }

  const calculateTariff = async () => {
    if (!formData.originCountry || !formData.destinationCountry || !formData.productCategory || !formData.itemValue) {
      setError('Please fill in all fields')
      return
    }

    if (isNaN(formData.itemValue) || parseFloat(formData.itemValue) <= 0) {
      setError('Please enter a valid item value')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:8080/api/tariff/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originCountry: formData.originCountry,
          destinationCountry: formData.destinationCountry,
          productCategory: formData.productCategory,
          itemValue: parseFloat(formData.itemValue)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to calculate tariff')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Error calculating tariff. Please make sure the backend server is running.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      originCountry: '',
      destinationCountry: '',
      productCategory: '',
      itemValue: ''
    })
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Tariff Calculator</h1>
          </div>
          <p className="text-lg text-gray-600">Calculate import tariffs for international trade</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Trade Information
              </CardTitle>
              <CardDescription>
                Enter the details of your international trade transaction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin Country</Label>
                <Select value={formData.originCountry} onValueChange={(value) => handleInputChange('originCountry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select origin country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination Country</Label>
                <Select value={formData.destinationCountry} onValueChange={(value) => handleInputChange('destinationCountry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Product Category</Label>
                <Select value={formData.productCategory} onValueChange={(value) => handleInputChange('productCategory', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="value">Item Value (USD)</Label>
                <Input
                  id="value"
                  type="number"
                  placeholder="Enter item value"
                  value={formData.itemValue}
                  onChange={(e) => handleInputChange('itemValue', e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <Button 
                  onClick={calculateTariff} 
                  disabled={loading}
                  className="flex-1"
                >
                  {loading ? 'Calculating...' : 'Calculate Tariff'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  disabled={loading}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Calculation Results
              </CardTitle>
              <CardDescription>
                Tariff calculation breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">Route</div>
                      <div className="text-lg font-semibold">{result.originCountry} → {result.destinationCountry}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">Category</div>
                      <div className="text-lg font-semibold flex items-center">
                        <Package className="h-4 w-4 mr-1" />
                        {result.productCategory}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Item Value:</span>
                      <span className="font-semibold">${result.itemValue?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Tariff Rate:</span>
                      <span className="font-semibold">{result.tariffRate?.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Tariff Amount:</span>
                      <span className="font-semibold">${result.tariffAmount?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gray-50 px-4 rounded-lg">
                      <span className="text-lg font-semibold">Total Cost:</span>
                      <span className="text-xl font-bold text-blue-600">${result.totalCost?.toFixed(2)}</span>
                    </div>
                  </div>

                  {!result.tariffFound && (
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <div className="text-yellow-800 text-sm">
                        <strong>Note:</strong> No specific tariff rate found for this trade route and product category. 
                        Showing zero tariff rate.
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter trade details and click "Calculate Tariff" to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App

