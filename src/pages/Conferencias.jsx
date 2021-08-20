import React from 'react';

const Conferencias = () => {
    const conferenceArray = [
        {
            id: 1,
            titulo: 'Conferencia 1',
            fecha: '16-8-2020',
            lugar: 'Ibarra',
            info: '0990812688',
            image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'
        },
        {
            id: 1,
            titulo: 'Conferencia 2',
            fecha: '16-8-2020',
            lugar: 'Ibarra',
            info: '0990812688',
            image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'

        }, {
            id: 1,
            titulo: 'Conferencia 3',
            fecha: '16-8-2020',
            lugar: 'Ibarra',
            info: '0990812688',
            image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'

        }, {
            id: 1,
            titulo: 'Conferencia 1',
            fecha: '16-8-2020',
            lugar: 'Ibarra',
            info: '0990812688',
            image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'
        }
    ]
    const conferenceDisplay = conferenceArray.map((items) => {
        return (
            <div className="relative group shadow-lg block center-content hover:shadow-xl mb-14">
                <img className="group-hover:grayscale group-hover:blur group-hover:contrast"  src={items.image} alt={items.titulo}/>
                <h2 className="text-xl font-black p-2">{items.titulo}</h2>
                <p>{items.fecha}</p>
                <p className="p-2">{items.lugar}</p>
                <div className="transition bg-yellow-50 duration-600 bottom-0 left-0 h-40 md:h-40 w-full absolute group-hover:opacity-100 opacity-0">
                    <a href='https://api.whatsapp.com/send/?phone=%2B593990812688&text=Estoy+Interesado+en+asistir+a+este+evento.&app_absent=0' target="_blank" className="animate-bounce rounded-xl w-20 bg-yellow-500 p-6 text-white md:text-lg md:p-3 text-xl">Inscribirme</a>
                </div>
            </div>
        )
    })
    return (
        <>
            <h2 className=" text-xl md:text-2xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold">Conferencias</h2>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center">
                {conferenceDisplay}
            </div>
        </>
    )
}
export default Conferencias;