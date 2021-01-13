import React from 'react';
import './App.css';
import firebase from './services/firebase.js';
import Pizzicato from 'pizzicato';
import PizzicatoRecorder from 'pizzicato-recorder';
import logo from './Groovehero.jpg';

import Box from './Box';

PizzicatoRecorder(Pizzicato);

const storage = firebase.storage().ref("tracks/rock_bass1.mp3");
console.log(storage);


let rockBass1 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_bass1.mp3?alt=media&token=12eb7bba-41a3-490f-b1f2-30742a0d29a0'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockBass2 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_bass2.mp3?alt=media&token=34176b0e-e046-491e-8da6-9db8f34975da'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockBass3 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_bass3.mp3?alt=media&token=8fec8c69-2b99-452a-955a-2f2ddd296e5d'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockBass4 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_bass4.mp3?alt=media&token=6f811939-c214-4902-8968-39eacb7cfa01'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockDrum1 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_drum1.mp3?alt=media&token=27b570c1-732f-45a7-b4da-9ada01fcf360'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockDrum2 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_drum2.mp3?alt=media&token=035ddf99-5956-47dc-bd26-fca250026cf9'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockDrum3 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_drum3.mp3?alt=media&token=c47f7923-193e-4189-a4d0-11e241d53b78'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockDrum4 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_drum4.mp3?alt=media&token=5515d360-0692-4b34-ad7e-48db22948a14'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});


let rockRhythm1 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_rhythm1.mp3?alt=media&token=a5a14a50-14ba-4588-b490-c9401e001a3d'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockRhythm2 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_rhythm2.mp3?alt=media&token=3195a72b-a72d-4c82-ad91-a5f0a70d2a5f'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockRhythm3 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_rhythm3.mp3?alt=media&token=fe549b7e-2b87-4652-b932-4c01081a22f9'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockRhythm4 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_rhythm4.mp3?alt=media&token=f8261cb2-9899-4270-8f23-9b740d63e893'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockSolo1 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_solo1.mp3?alt=media&token=1ed0fc33-3572-4227-9c69-145707696dec'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockSolo2 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_solo2.mp3?alt=media&token=dc979966-0c47-4899-a08b-751c4a193740'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockSolo3 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_solo3.mp3?alt=media&token=ed0cf996-5541-4276-9aed-cfcb3895f875'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});

let rockSolo4 = new Pizzicato.Sound({
    source: 'file',
    options: {path: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2Frock_solo4.mp3?alt=media&token=9b1c45a0-84a1-44fc-92a6-b680ce8077fd'}
}, function (error)
{
    if (!error)
    {
        console.log('[pzSound] Loaded: Sound loaded successfully!');
    }
    else
    {
        console.log('[pzSound] Error: ' + error);
    }
});


const BassAssets = [
    {
        name: rockBass1,
        text: "Bass 1",
        sound: rockBass1
    },
    {
        name: rockBass2,
        text: "Bass 2",
        sound: rockBass2
    },

    {
        name: rockBass3,
        text: "Bass 3",
        sound: rockBass3
    },
    {
        name: rockBass4,
        text: "Bass 4",
        sound: rockBass4
    },
];

const DrumAssets = [ 
    {
        name: rockDrum1,
        text: "Drum 1",
        sound: rockDrum1
    },
    {
        name: rockDrum2,
        text: "Drum 2",
        sound: rockDrum2
    },
    {
        name: rockDrum3,
        text: "Drum 3",
        sound: rockDrum3
    },
    {
        name: rockDrum4,
        text: "Drum 4",
        sound: rockDrum4
    },
];

const RhythmAssets = [
    {
        name: rockRhythm1,
        text: "Rhythm 1",
        sound: rockRhythm1
    },
    {
        name: rockRhythm2,
        text: "Rhythm 2",
        sound: rockRhythm2
    },
    {
        name: rockRhythm3,
        text: "Rhythm 3",
        sound: rockRhythm3
    },
    {
        name: rockRhythm4,
        text: "Rhythm 4",
        sound: rockRhythm4
    },
];

const SoloAssets = [
    {
        name: rockSolo1,
        text: "Solo 1",
        sound: rockSolo1
    },
    {
        name: rockSolo2,
        text: "Solo 2",
        sound: rockSolo2
    },
    {
        name: rockSolo3,
        text: "Solo 3",
        sound: rockSolo3
    },
    {
        name: rockSolo4,
        text: "Solo 4",
        sound: rockSolo4
    },
];

function App()
{
    function startRecording()
    {
        Pizzicato.Recorder.start({mute: false});
    }

    function saveRecording()
    {
        Pizzicato.Recorder.stop('wav', handleAudio);
    }

    function handleAudio(file, fileType)
    {
        let url = URL.createObjectURL(file);
        let hf = document.createElement('a');
        hf.href = url;
        hf.download = 'song.' + fileType;
        hf.innerHTML = hf.download;
        hf.click();
    }

    return (
        <div className="App" >
            <img src={logo} align="center" height="150px" width="150px"></img>
            <h2 className="Text">GrooveHero</h2>
            <fieldset id="field">
                <div className="BassClass">
            {/* Render Bass Assets */}
            {BassAssets.map(track =>
            {
                
                return <Box track={track}/>
            })}
            </div>
            <div className="DrumClass">
            {/* Render Drum Assets */}
            {DrumAssets.map(track =>
            {
                
                return <Box track={track}/>

            })}
            </div>
            <div className="RythmClass">
            {/* Render Rhythm Assets */}
            {RhythmAssets.map(track =>
            {

                return <Box track={track}/>

            })}
            </div>
            <div className="SoloClass">
            {/* Render Solo Assets */}
            {SoloAssets.map(track =>
            {

                return <Box track={track}/>

            })}
            </div>
            <div className="EffectClass">
            <button className="box" id='reverb'>Reverb</button>
            <button className="box" id='quadrafuzz'>Quadrafuzz</button>
            <button className="box" id='tremolo'>Tremolo</button>
            </div>
            <div className="FunctionsClass">
            {/* Functions */}
            <button className="box" id='stop'>Stop Sound</button>
            <button className="box" id='record' onClick={startRecording}>Start record</button>
            <button className="box" id='save' onClick={saveRecording}>Save record</button>
            </div>
            </fieldset>
        </div>
    );
}

export default App;
