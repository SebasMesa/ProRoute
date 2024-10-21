"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/aceternity/apple-cards-carousel";
import styles from '@/styles'

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className={`font-DtStandard ${styles.heading2} mb-[2rem]`}>
      Descubre Nuevas Oportunidades
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Inteligencia Artificial",
    title: "Lleva tu código al siguiente nivel con IA",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // content: <DummyContent />,
    description: "Descubre cómo la IA puede acelerar tu aprendizaje. Aprovecha soluciones automatizadas y recomendaciones personalizadas para escribir código más rápido y de mejor calidad."
  },
  {
    category: "Productividad",
    title: "Potencia tu productividad como programador",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Accede a herramientas diseñadas para mejorar tus habilidades y maximizar el uso de tu tiempo. Planifica, ejecuta y optimiza tus proyectos de programación en menos tiempo."
  },
  {
    category: "Producto Destacado",
    title: "Próximamente: La nueva plataforma ProRoute",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Descubre lo que está por venir. Nuevas funciones, comunidad renovada y desafíos más retadores para que sigas creciendo como programador. ¡No te lo pierdas!"
  },

  {
    category: "Desafíos Semanales",
    title: "Reta tus habilidades, cada semana",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Participa en nuestros desafíos de programación diseñados para ponerte a prueba y ayudarte a aprender algo nuevo en cada reto."
  },
  {
    category: "Comunidades",
    title: "Únete a una comunidad global de programadores",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Conéctate con desarrolladores de todo el mundo. Comparte ideas, resuelve dudas y crece junto a expertos de diferentes tecnologías."
  },
  {
    category: "Guías Interactivas",
    title: "Aprende haciendo con nuestras guías paso a paso",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Domina nuevas habilidades con nuestras guías prácticas que te permiten avanzar mientras creas proyectos reales."
  },
];
