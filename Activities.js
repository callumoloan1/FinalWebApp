import React from 'react'
import './Activities.css'

const Activities = () => {
  return (
    <div className='acthead'>
        <h1>Activities to improve my Head Health</h1>
        <div className='subhead'>
            <p>Here is a list of activities that professionals advise you partake in to better your Mental Health!</p>
            <div className='sleep'>
                <p1>Get plenty of Sleep</p1>
                <p>Suffecient sleep facilitates the brains processing of emotional information. It helps to evaluate thoughts and feelings.<br />
                    A lack of sleep has been proven to be harmful for the brain as it is harmful for consolidation and emotional support.<br />
                    Try to get atleast 7 hours of sleep a day reinforce a healthy mind! <br />
                </p>
                <br />
                <div className='exercise'>
                    <p1>Exercise</p1>
                    <p>Exercise can be used to improve mental health by reducing anxiety depression and negative moods.<br />
                    Exercise releases chemical reactions such as serotonin to improve self-esteem and cognitive abilities. One main benefit of <br />
                    exercise is it enables better sleeping patterns and allows your body to rest.</p>
                    <br />
                </div>
                    <div className='exercise'>
                        <p1>Yoga</p1>
                        <p>Yoga is a form of a low toned execise. Yoga allows you to lower stress hormones and release serotonin which is <br />
                        beneficial for improvement in mood. These feel good chemicals decrease problems like anxiety and depression.</p>
                        <br />
                    </div>
                        <div className='exercise'>
                            <p1>Eat Breakfast</p1>
                            <p>Breakfast is one of the most important meals of the day so it is important that you have a meal every morning.<br />
                            It has been shown that eating breakfast can lead to a better and more positive mood. Missing meals can cause a person <br />
                            to have high blood pressure, fatigue and 'brain fog'.
                            </p>
                            <br />
                        </div>
                            <div className='exercise'>
                                <p1>Acts of Kindness (Mindfullness)</p1>
                                <p>The next time you are out and about, try doing a random act of kindness. These random acts can help with increased <br />
                                self-esteem empathy and compassion. People who act in a mindfull way tend to live longer and are healthier.</p>
                                <br />
                            </div>
            </div>
        </div>
    </div>
  )
}

export default Activities