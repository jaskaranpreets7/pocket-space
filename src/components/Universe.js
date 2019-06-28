import React from 'react'

export default function Universe() {
    const universFacts = [
        'There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!',
        'A black hole is created when big stars explode. Its gravitational force is so strong that nothing can escape from it – luckily the closest black hole is about 10,000 light-years from Earth.',
        'When venturing into space, astronauts wear spacesuits which have to be warmed, cooled, pressurised and supplied with fresh air. This takes six hours for them to put on!',
        'The universe has no centre and is constantly expanding (getting bigger) every second – making it impossible to reach the edge.',
        'The Earth is about 4.5 billion years old – but that’s only a third of the age of the universe – which is 13.5 billion years old!',
        'The Earth is tiny in comparison with the rest of the universe – it could fit into the sun 1.3 million times. How small does that make you feel? Check out this cool clip for fascinating facts about the sun…',
        'In 840AD Emperor Louis of Bavaria died of fright when experiencing an eclipse of the sun – this is when the moon moves between the Earth and the sun and a shadow falls over parts of the Earth.',
        'The moon is the reason why we have tides and waves on Earth. Along with the sun, it moves billions of tonnes of water each day.',
        'A day on Mercury lasts longer than its year! Mercury moves around the sun faster than any other planet – making its year the equivalent of 88 Earth days. While a day on Mercury – the interval between one sunrise and the next – lasts 176 Earth days!',
        'In 2006, Pluto was reclassified as a ‘dwarf planet’ after 76 years classified as the outermost planet in our solar system since its discovery in 1930.'
    ];

    return (
        <div>
            <h3>10 top facts about our universe and beyond!</h3>
            <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list" >
                    {universFacts.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="content">
                                    <div className="header">
                                        <i className="rocket icon"></i>
                                        {item}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
