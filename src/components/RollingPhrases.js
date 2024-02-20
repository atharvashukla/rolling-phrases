"use client";

const phrases = [
  "for Autonomous Negotiation",
  "for Innovation",
  "for Streamlined negotiations",
  "for Transparency",
  "for Reduced Time-to-Hire",
  "for Scale",
  "for Cost-Effective Scaling",
  "for Availability 24x7",
];

export default function RollingPhrases() {
  return (
    <div className="overflow-hidden h-6 mt-2 relative">
      {phrases.map((phrase, index) => (
        <div key={index} className="whitespace-nowrap animate-roll">
          {phrase}
        </div>
      ))}
    </div>
  );
}
