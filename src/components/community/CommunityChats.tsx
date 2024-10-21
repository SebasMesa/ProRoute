import React from 'react'
import CommunityChatsCards from '@/components/ui/CommunityChatsCards'

const CommunityChats = () => {
    const communityChats = [
        {
          id: 1,
          name: 'Ana Gómez',
          community: 'React Developers',
          message: '¿Alguien ha tenido problemas al usar `useEffect` con dependencias dinámicas? Mis componentes se están re-renderizando de manera inesperada.',
          likes: 34,
          img: null,
          user: '@ana_dev',
          time: 1,
          className: 'chat-card-react',
        },
        {
          id: 2,
          name: 'Carlos Méndez',
          community: 'Python Latinoamérica',
          message: 'Estoy trabajando con Django y tengo una duda sobre cómo implementar señales (signals) correctamente para optimizar las notificaciones. ¿Algún consejo?',
          likes: 45,
          img: 'https://via.placeholder.com/200x200',
          user: '@carlos_py',
          time: 3,
          className: 'chat-card-django',
        },
        {
          id: 3,
          name: 'Lucía Fernández',
          community: 'Full Stack Enthusiasts',
          message: '¿Qué librerías recomiendan para manejo de autenticación en un stack MERN? He visto `Passport.js`, pero no sé si sigue siendo la mejor opción.',
          likes: 27,
          img: null,
          user: '@lucia_fullstack',
          time: 5,
          className: 'chat-card-mern',
        },
        {
          id: 4,
          name: 'Juan Pérez',
          community: 'Frontend Masters',
          message: '¿Alguien ha trabajado con TailwindCSS y le ha resultado difícil mantener un código limpio a medida que el proyecto crece? Me pregunto si hay alguna forma de modular los estilos mejor.',
          likes: 60,
          img: 'https://via.placeholder.com/150x150',
          user: '@juan_code',
          time: 2,
          className: 'chat-card-tailwind',
        }
      ];
      
    return ( 
        <div>  
            {communityChats.map((chat) => (
                <CommunityChatsCards key={chat.id} name={chat.name} community={chat.community} message={chat.message} likes={chat.likes} img={chat.img} user={chat.user} time={chat.time} className={chat.className}/>
            ))}
        </div>
    )
}

export default CommunityChats
