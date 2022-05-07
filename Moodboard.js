import React from 'react'
import './Moodboard.css'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const anxClick = () => {
    alert('We feel like you are suffering from Anxiety, Please read more information regarding Anxiety from this page')
}

const depClick = () => {
    alert('We feel like you are suffering from Depression, Please read more information regarding Depression from this page')
}

const hallClick = () => {
    alert('We feel like you are suffering from Schizophrenia, Please read more information regarding Schizophreniafrom this page')
}

const moodClick = () => {
    alert('We feel like you are suffering from Mood Swings, Please read more information regarding Mood Swings from this page')
}

const psyClick = () => {
    alert('We feel like you are suffering from Insomnia, Please read more information regarding Insomnia from this page')
}

const ptsdClick = () => {
    alert('We feel like you are suffering from PTSD, Please read more information regarding PTSD from this page')
}

const ocdClick = () => {
    alert('We feel like you are suffering from OCD, Please read more information regarding OCD from this page')
}

const perClick = () => {
    alert('We feel like you are suffering from a Personality Disorder, Please read more information regarding Personality Disorders from this page')
}

const eatClick = () => {
    alert('We feel like you are suffering from a Eating Disorder, Please read more information regarding Eating Disorders from this page')
}

const biClick = () => {
    alert('We feel like you are suffering from a Bipolar Disorder, Please read more information regarding Bipolar Disorders from this page')
}

const Moodboard = () => {
  return (
    <div className='moodhead'>
        <h1>Welcome to the Moodboard</h1>
        <p>To fully understand how you feel we have planned out some buttons. <br />
        Each button is directly corrilated to a symptom and if you feel that <br />
        the phrase matches your emotions or feelings you can seek advice on it! </p>
            <div className="danger">
                <Link to ='/Health'  onClick={anxClick}>Feeling Nervous</Link><p1>- Do you feel nervous, restless or even tense very easily?</p1>
            </div>
                <div className="danger1">
                    <Link to ='/Health' onClick={depClick}>Feeling Sad</Link><p1>- Do you feel sad often over a period of two or more weeks?</p1>
                </div>
                    <div className="danger2">
                        <Link to ='/Health' onClick={hallClick}>Feeling Confused</Link><p1>- Do you think and or are suspicious of those around you?</p1>
                    </div>
                        <div className="danger3">
                            <Link to ='/Health' onClick={moodClick}>Emotion Change</Link><p1>- Do you feel low to extreme emotional highs or vice versa?</p1>
                        </div>
                            <div className="danger4">
                                <Link to ='/Health' onClick={psyClick}>Can't Sleep</Link><p1>- Do you find it hard to fall asleep or stay asleep? </p1>
                            </div>
                                <div className="danger5">
                                    <Link to ='/Health' onClick={ptsdClick}>Easily startled</Link><p1>- Are you easily startled and find it hard to concentrate with aggresive behaviour?</p1>
                                </div>
                                    <div className="danger6">
                                        <Link to ='/Health' onClick={ocdClick}>Feeling Obsessive</Link><p1>- Do you frequently obsess or have compulsive behaviours?</p1>
                                    </div>
                                        <div className="danger7">
                                            <Link to ='/Health' onClick={perClick}>Feeling Unstable</Link><p1>- Do you feel unstable and have intense relationships with yourself?</p1>
                                        </div>
                                            <div className="danger8">
                                                <Link to ='/Health' onClick={eatClick}>Unhealthy living</Link><p1>- Do you partake in unhealthy eating habits?</p1>
                                            </div>
                                                <div className="danger9">
                                                    <Link to ='/Health' onClick={biClick}>Mixed Emotions</Link><p1>- Do you feel like you can't control your emotions?</p1>
                                                </div>
                    
                
    </div>
  )

}

export default Moodboard