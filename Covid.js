import React from 'react'
import './Activities.css'
import { Link } from 'react-router-dom'

const COVID = () => {
  return (
    <div className='acthead'>
        <h1>COVID-19 Updates and Guidance</h1>
        <div className='subhead'>
            <p>All the latest restriction updates and guidance regarding COVID-19 in the UK</p>
            <div className='sleep'>
                <p4>Get Vaccinated</p4>
                <p>To fight against COVID-19, we recommend you get vaccinated. To view where you can get vaccinated in the UK </p>
                <p2>View COVID-19 Vaccination centres near you:</p2> <br /> 
                  <p5>https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/ </p5><br />
                <br />
                <div className='exercise'>
                    <p4>Restrictions in the UK</p4><br />
                    <p2>What are the restrictions in the UK?</p2><br />
                    <br /><li>Northern Ireland</li>
                        <p2>One of the best ways to keepmental wellbeing is keeping in touch with those important <br />
                        Keep in touch over social media and arrange a face to face call to maintain a Healthy Head!</p2><br />
                        <br /><li>Scotland</li>
                        <p2>You are strongly advised to wear face coverings in indoor and public places such as events and public transport.<br />
                            People with symtoms are no longer asked for a PCR test.<br />
                            Testing for the public has ended.</p2><br />
                        <br /><li>Wales</li>
                        <p2>Masks are no longer required in shops and public places although they are recommended.<br />
                            The legal requirement to self isolate for COVID-19 has ended, but strongly advised.<br />
                            Wales will maintain some testing until the end of June like free lateral flows and contact tracing.</p2><br />
                        <br /><li>England</li>
                        <p2>The government advises wearing a mask in crowded places where they may come into contact.<br />
                            Face coverings are still required when entering andy healthcare setting.<br />
                            No longer legally required to self-isolate</p2><br />
                            <br /><p2>More information can be found here:-</p2><p5>https://www.bbc.co.uk/news/explainers-52530518</p5>
                </div>
                    <div className='exercise'>
                        <br /><p4>How to cope with COVID-19</p4><br />
                        <br /><li>Stay connected with people</li>
                        <p2>One of the best ways to keepmental wellbeing is keeping in touch with those important <br />
                        Keep in touch over social media and arrange a face to face call to maintain a Healthy Head!</p2><br />
                        <br /><li>Good Hygenie</li>
                        <p2>Wash and clean you hands and face regularly to minimise the chance of catch the COVID-19 virus.<br />
                        If you can wear face masks if buisnesses encourage it!</p2><br />
                        <br /><li>Try new hobbies</li>
                        <p2>If you are having a difficult time at home try doing a hobby you enjoy,<br />
                        If you haven't any hobbies at the moment, try something new!</p2>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default COVID