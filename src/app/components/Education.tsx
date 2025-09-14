import { education } from '../data/data'
import Image from 'next/image'

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3">Education</h2>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg">
            <div className="flex items-center space-x-4">
              <Image src={edu.logo} alt="University Logo" width={48} height={48} className="rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{edu.name}</h3>
                <p className="text-sm font-medium">{edu.course}</p>
              </div>
            </div>
            <span className="text-sm font-medium">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
