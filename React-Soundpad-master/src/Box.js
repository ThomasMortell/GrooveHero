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
