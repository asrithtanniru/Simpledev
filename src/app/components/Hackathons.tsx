import { hackathons } from '../data/data'

export default function Hackathons() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-foreground">Hackathons</h2>
      <ul className="list-disc pl-8 space-y-1 text-foreground">
        {hackathons.map((hackathon, index) => (
          <li key={index} className="text-muted-foreground">
            <span className="text-foreground font-medium">{hackathon.name}</span>: {hackathon.description} - {hackathon.year}
          </li>
        ))}
      </ul>
    </section>
  )
}
