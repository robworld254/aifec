'use server'

import { createTransport } from 'nodemailer'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { v4 as uuidv4 } from 'uuid'

type RegisterUserParams = {
  name: string
  email: string
  organization: string
  package: string
  registrationType: "delegate" | "exhibitor"
  boothSize?: string
  additionalRequirements?: string
}

export async function registerUser(formData: RegisterUserParams) {
  try {
    const referenceNumber = uuidv4().slice(0, 8).toUpperCase()
    
    // Generate PDF
    const pdfBytes = await generatePDF(formData, referenceNumber)

    // Send email
    await sendEmail(formData.email, pdfBytes, referenceNumber)

    return { 
      success: true, 
      message: 'Registration successful. Please check your email for confirmation.',
      referenceNumber 
    }
  } catch (error) {
    console.error('Registration error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred during registration' 
    }
  }
}

async function generatePDF(formData: RegisterUserParams, referenceNumber: string) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage()
  const { height } = page.getSize()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Add content
  page.drawText('AIFEC Africa Registration Confirmation', {
    x: 50,
    y: height - 150,
    size: 20,
    font,
    color: rgb(0, 0, 0)
  })

  page.drawText(`Reference Number: ${referenceNumber}`, {
    x: 50,
    y: height - 180,
    size: 12,
    font,
    color: rgb(0, 0, 0)
  })

  const details = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Organization: ${formData.organization}`,
    `Registration Type: ${formData.registrationType}`,
    `Package: ${formData.package}`,
  ]

  if (formData.registrationType === 'exhibitor') {
    details.push(
      `Booth Size: ${formData.boothSize || 'N/A'}`,
      `Additional Requirements: ${formData.additionalRequirements || 'None'}`
    )
  }

  details.forEach((text, index) => {
    page.drawText(text, {
      x: 50,
      y: height - 210 - (index * 20),
      size: 12,
      font,
      color: rgb(0, 0, 0)
    })
  })

  return await pdfDoc.save()
}

async function sendEmail(to: string, pdfAttachment: Uint8Array, referenceNumber: string) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: '"AIFEC Africa" <noreply@aifec.africa>',
    to: 'registration@aifec.africa',
    cc: to,
    subject: `AIFEC Africa Registration Confirmation - ${referenceNumber}`,
    text: `
      Thank you for registering for AIFEC Africa!
      
      Your registration has been received and is being processed. Please keep this email for your records.
      
      Reference Number: ${referenceNumber}
      
      If you have any questions, please contact us at support@aifec.africa.
      
      Best regards,
      AIFEC Africa Team
    `,
    attachments: [
      {
        filename: `AIFEC_Africa_Registration_${referenceNumber}.pdf`,
        content: Buffer.from(pdfAttachment),
      },
    ],
  })
}

