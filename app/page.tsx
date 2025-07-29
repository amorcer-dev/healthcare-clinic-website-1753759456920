import React from 'react';
import { ClinicHero } from '../components/HeroSection'
import { ClinicContactForm } from '../components/ContactForm'
import { ClinicNavbar } from '../components/NavigationBar'
import { ClinicFooter } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClinicHero
        title="HealthCare Clinic"
        subtitle="Professional healthcare services for you and your family"
        ctaText="Book Appointment"
        ctaLink="#contact"
        className=""
      />
      <ClinicContactForm
        className=""
      />
      <ClinicNavbar
        logoText="HealthCare Clinic"
        links={[
        {
                "label": "Home",
                "href": "#home"
        },
        {
                "label": "Services",
                "href": "#services"
        },
        {
                "label": "About",
                "href": "#about"
        },
        {
                "label": "Contact",
                "href": "#contact"
        }
]}
        appointmentText="Book Now"
        appointmentHref="#contact"
        className=""
      />
      <ClinicFooter
        clinicName="HealthCare Clinic"
        address="123 Medical Center Dr, Healthcare City, HC 12345"
        links={[
        {
                "label": "Privacy Policy",
                "href": "/privacy"
        },
        {
                "label": "Terms of Service",
                "href": "/terms"
        },
        {
                "label": "Contact",
                "href": "/contact"
        }
]}
        social={[
        {
                "icon": "📧",
                "href": "mailto:contact@clinic.com",
                "label": "Email"
        },
        {
                "icon": "📞",
                "href": "tel:+1234567890",
                "label": "Phone"
        }
]}
        className=""
      />
    </main>
  );
}