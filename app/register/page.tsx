"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from 'lucide-react'
import { registerUser } from "@/app/actions/register"
import { useToast } from "@/components/ui/use-toast"

const delegatePackages = [
  {
    name: "Standard",
    price: 500,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Access to all conference sessions",
      "Conference materials",
      "Lunch and refreshments",
      "Networking opportunities"
    ]
  },
  {
    name: "Premium",
    price: 750,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "All Standard features",
      "VIP seating",
      "Access to exclusive workshops",
      "Conference dinner invitation",
      "Digital content access"
    ]
  },
  {
    name: "VIP",
    price: 1000,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "All Premium features",
      "One-on-one meetings with speakers",
      "Private networking sessions",
      "Exclusive VIP lounge access",
      "Priority registration for next year"
    ]
  }
]

const exhibitorPackages = [
  {
    name: "Small Booth",
    price: 2000,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "3x3m exhibition space",
      "Basic booth setup",
      "2 exhibitor passes",
      "Company listing in program"
    ]
  },
  {
    name: "Medium Booth",
    price: 3500,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "4x4m exhibition space",
      "Premium booth setup",
      "4 exhibitor passes",
      "Featured company listing",
      "Basic marketing package"
    ]
  },
  {
    name: "Large Booth",
    price: 5000,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "5x5m exhibition space",
      "Luxury booth setup",
      "6 exhibitor passes",
      "Premium marketing package",
      "Speaking opportunity"
    ]
  }
]

export default function RegisterPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)
  const [registrationType, setRegistrationType] = useState<"delegate" | "exhibitor" | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    package: "",
    boothSize: "",
    additionalRequirements: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePackageSelect = (value: string) => {
    setFormData({ ...formData, package: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await registerUser({
        ...formData,
        registrationType: registrationType!,
      })

      if (result.success) {
        toast({
          title: "Registration Successful",
          description: `Thank you for registering for AIFEC Africa 2024! Your reference number is ${result.referenceNumber}. Please check your email for confirmation.`,
        })
        // Reset form or redirect
        setStep(1)
        setRegistrationType(null)
        setFormData({
          name: "",
          email: "",
          organization: "",
          package: "",
          boothSize: "",
          additionalRequirements: "",
        })
      } else {
        toast({
          title: "Registration Failed",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Register for AIFEC Africa 2024</h1>

      <motion.div
        className="h-2 bg-gray-200 rounded-full mb-8"
        initial={{ width: 0 }}
        animate={{ width: `${(step / 4) * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full bg-red-600 rounded-full"></div>
      </motion.div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Select Registration Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card
                    className={`cursor-pointer transition-all ${
                      registrationType === "delegate" ? "border-red-600 scale-105" : ""
                    }`}
                    onClick={() => setRegistrationType("delegate")}
                  >
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Delegate"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Delegate</CardTitle>
                      <CardDescription>
                        Join as an attendee and gain access to all conference sessions, networking opportunities, and more
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card
                    className={`cursor-pointer transition-all ${
                      registrationType === "exhibitor" ? "border-red-600 scale-105" : ""
                    }`}
                    onClick={() => setRegistrationType("exhibitor")}
                  >
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Exhibitor"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Exhibitor</CardTitle>
                      <CardDescription>
                        Africa&apos;s premier infrastructure financing event
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <Button className="mt-6" onClick={() => setStep(2)} disabled={!registrationType}>
                  Next
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Select Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(registrationType === "delegate" ? delegatePackages : exhibitorPackages).map((pkg) => (
                    <Card
                      key={pkg.name}
                      className={`cursor-pointer transition-all ${
                        formData.package === pkg.name ? "border-red-600 scale-105" : ""
                      }`}
                      onClick={() => handlePackageSelect(pkg.name)}
                    >
                      <div className="relative h-40">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>${pkg.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 space-x-4">
                  <Button onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!formData.package}>
                    Next
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" name="organization" value={formData.organization} onChange={handleInputChange} />
                  </div>
                  {registrationType === "exhibitor" && (
                    <div>
                      <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                      <textarea
                        id="additionalRequirements"
                        name="additionalRequirements"
                        value={formData.additionalRequirements}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        rows={4}
                      />
                    </div>
                  )}
                  <div className="space-x-4">
                    <Button onClick={() => setStep(2)}>Back</Button>
                    <Button onClick={() => setStep(4)}>Next</Button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Confirm Registration</h2>
                <div className="space-y-2">
                  <p><strong>Registration Type:</strong> {registrationType}</p>
                  <p><strong>Package:</strong> {formData.package}</p>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Organization:</strong> {formData.organization}</p>
                  {registrationType === "exhibitor" && (
                    <>
                      <p><strong>Booth Size:</strong> {formData.boothSize}</p>
                      <p><strong>Additional Requirements:</strong> {formData.additionalRequirements || "None"}</p>
                    </>
                  )}
                </div>
                <div className="mt-4 space-x-4">
                  <Button onClick={() => setStep(3)}>Back</Button>
                  <Button 
                    onClick={handleSubmit} 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Confirm and Register"}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}

