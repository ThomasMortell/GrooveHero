import React, {Component} from 'react';
import './Box.css'
import PizzicatoRecorder from 'pizzicato-recorder'
import Pizzicato from 'pizzicato'

PizzicatoRecorder(Pizzicato);


class Box extends Component
{

   
    
    onClick = () =>
    {

        let reverb = new Pizzicato.Effects.Reverb({
            time: 2.05,
            decay: 0.01,
            reverse: false,
            mix: 0.7
        });

        var quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
            lowGain: 0.6,
            midLowGain: 0.8,
            midHighGain: 0.5,
            highGain: 0.6,
            mix: 1.0
        });

        var tremolo = new Pizzicato.Effects.Tremolo({
            speed: 7,
            depth: 0.8,
            mix: 0.8
        });

        this.props.track.sound.loop = true;
        this.props.track.sound.play();

        document.getElementById('stop').addEventListener('click', () =>
        {
            this.props.track.sound.stop();
        });

        document.getElementById('reverb').addEventListener('click', () =>
        {
            this.props.track.sound.addEffect(reverb);
        });

        document.getElementById('quadrafuzz').addEventListener('click', () =>
        {
            this.props.track.sound.addEffect(quadrafuzz);
        });

        document.getElementById('tremolo').addEventListener('click', () =>
        {
            this.props.track.sound.addEffect(tremolo);
        });
    }

    render()
    {

        return ( 
            <button onClick={this.onClick} className="box">
                {this.props.track.text}
            </button>
        )
    }

}

export default Box;
