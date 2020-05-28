import React, { useRef, useEffect }  from 'react';
import { gsap } from "gsap";
import pokeball from '../../img/pokeball.png'

const Pokeball = () =>  <img src={pokeball} className="img-fluid"/>

function Loading(){
    const wrapper = useRef(null);

    useEffect( () => {
        // @ts-ignore: Object is possibly 'null'.
        const pokeball: HTMLDivElement = wrapper.current.children[0];
        // @ts-ignore: Object is possibly 'null'.
        const text: HTMLDivElement = wrapper.current.children[1];

        gsap.set(pokeball, { autoAlpha: 0});

        const tl = gsap.timeline({ defaults: { ease: 'bounce.out' }});
        const tl2 = gsap.timeline({ defaults: { ease: 'power3.inOut' }});

        tl.fromTo( pokeball, {autoAlpha: 1, y: '-=300'}, {duration: 2, y:'+=300', repeat: -1})
        tl2.fromTo(text.children, {y: '-=20'}, {duration: 1.5, y: '+=20', stagger: 0.3, repeat: -1, color: 'white'})

    }, [])

    return(
        <div className="loading__screen">
            <div ref={wrapper} className="loading__container">
                <Pokeball/>
                <div className="loading__text">
                    <div>L</div>
                    <div>O</div>
                    <div>A</div>
                    <div>D</div>
                    <div>I</div>
                    <div>N</div>
                    <div>G</div>
                </div>
            </div>
        </div>
    )
}

export default Loading;