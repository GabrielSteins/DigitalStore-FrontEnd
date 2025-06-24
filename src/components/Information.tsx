import React from 'react';
import { Link } from 'react-router-dom';

interface Information {
  text: string;
  link: string;
}

interface InformationsProps {
  title: string;
  informations: Information[];
}

export default function Informations({ title, informations }: InformationsProps) {
  return (
    <div>
      <h3 className="text-[16px] font-semibold mb-4">{title}</h3>
      <ul className="flex flex-col gap-2">
        {informations.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="text-[#CCCCCC] hover:text-white transition"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
