import React from 'react'
import './css/profilepage.css'
import cerficate from './images/certificate.jpg'

const All = () => {
  return (
    <>
    <div className='texts'>
    <h1>TANISHK KHARE</h1>
    <h4><u>Computer Science Student ABC</u></h4>
    </div>
    <div className='introduction'>
    I'm thrilled to extend a warm welcome to you as you explore my mini-react-application.
    Myself "Tanishk khare", I did my schooling from <a href='https://durg.kvs.ac.in/'target='blank'>Kendriya Vidyalaya Durg</a>.
    I'm currently pursuing my studies at <a href='https://www.ssmv.ac.in/'target='blank'>Shri ShankaraCharya Mahavidyalaya</a> where I'm engaged in BCA (Bachelor of Computer Applications).
    I have Certification of course "CS50" of "UNIVERSITY OF HARVARD".I had gained all the web-development 
    knowledge from internet.Youtube and Google helped to achieve the goal.
    My current typing speed is 75wpm which is more than the average typing speed of a normal person(40wpm)
    this makes me more productive and gives me a additional rage in my skills.I transitioned from a biology
    background and switched to Computer science.I feel that destiny of ours had already decided our path which one day appears in our way.
   It's always been a paradox what's your carrer would be but instead of discussing this paradox,
     I will tell you guys what I had learned from life and the experience I gained till now from life.<br/><br/>
     <div>
      <h2>PAST</h2>
    It's always been a wonder for me when I think about my past life. I was a NEET
    aspirant and there was a commitment of me to become a healer. Each day , I delved
    into the intricacies of biology and medicine , not just as a personal goal
    but as a service to the nation.
    As when days went off the prospect of donning the white coat and taking on the immense
    responsibility of preserving and improving lives is both awe-inspiring and dounting.
    The Fear not only in the rigorous academic journey, the demanding years of training,
    and the constant evolution medical knowledge but also in the understanding that each
    decision made in the field holds profound  consequences for individuals and their families.
    And the consequence was that I failed to qualify the medical-entrance exam even on my 3rd attempt.
     </div><br/>
     <div>
  <h2>LESSONS</h2>
  Engaging in activities that ignite your passion and align with your interests not only unleashes a surge
  of dopamine but also allows you to immerse yourself in a symphony of aesthetic fullfillment.
  It's the sweet melody of joy that plays in the background as you dance through the intricacies of your
  chosen pursuit.
  Crafting a contingency plan ,often refferd to as Plan B ,is akin to fashioning a well-woven safety
  net beneath the fabric of life. As when I failed in neet, the next plan which I truly loves to do
  emerged in my life which acknowledge the dynamic nature of my journey , recognizing that the script
  may deviate and the stage may transform."In the grand symphony of aspirants , Plan B is the harmonious counter point, an eloquent
  assurance that , regardless of the variation in melody , the crescendo of purpose will endure."
     </div><br/>
     <div>
      <h2>CERTIFICATION</h2>
      <h4>CS50 UNIVERSITY OF HARVARD</h4>
      <img  className='certificate'src={cerficate} alt='certificate'></img>
     </div>

        </div>
    </>
  )
}

export default All
