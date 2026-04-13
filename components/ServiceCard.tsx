interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  step?: number;
}

export default function ServiceCard({ title, description, icon, step }: ServiceCardProps) {
  return (
    <article className="service-card">
      {step && <div className="service-step">{step}</div>}
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
