import React from 'react'
import Container from '../component/sharedComponent/Container'

export default function About() {
  return (
    <Container>
        <div className="min-h-[calc(100vh-250px)] mt-5">
            <div className="max-w-xl mx-auto text-center">
                <h2 className='font-semibold text-4xl'>Our  Mission</h2>
                <p className='px-5 mx-auto mt-2'>Bringing accessible healthcare, expert consultations, and wellness education to communities in need, ensuring better health for all.</p>
            </div>

            <div className="my-24 flex gap-12">
                <img src="https://img.freepik.com/free-photo/physician-consulting-little-girl-with-arm-injury-exam-appointment-general-practitioner-examining-bones-fracture-child-medical-cabinet-checkup-visit-covid-19-pandemic_482257-41812.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid" alt="" />

                <div className="">
                    <h2 className='text-4xl'>How we work with perticipents</h2>
                    <p className='mt-2'>Participants can join MediCamp by registering online or on-site for a seamless healthcare experience. Upon arrival, they undergo basic health screenings, including vital checks and preliminary assessments. Experienced medical professionals then provide personalized consultations, addressing individual health concerns. If needed, participants receive treatments, prescriptions, and free medications, ensuring they get the care they require. In addition to medical services, MediCamp offers health awareness sessions on preventive care, nutrition, and overall well-being. For those needing further medical attention, referrals and follow-up guidance are provided, ensuring continuous support for a healthier future.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}
