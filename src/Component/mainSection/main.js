import React from 'react';
import Header from '../../Component/header/Header';
import image from '../../assets/image/img.png'
import './main.css'
import mainPic from '../../assets/image/main-pic.png'
const Main =()=>{
    return(
       
    <div>
    
         <div className='main-section'>
       
             <div className='right-section'>
               <Header />
               <div className='main-content'>
                   <div><img src={mainPic}/></div>
                   <div className='main-text-section'>
                   <div className='main-text'>تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات در هم پیچیده و ایران، مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه وزین و پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار نیشابوری و از سوی دیگر ادبیات قرن اخیر در شعر بانوی فرزانه پروین اعتصامی، وحدت وجود سرشار اشعار سهراب سپهری و عاشقانه های شاملو همه و همه همچون مرهمی بر زخم های کوچک و بزرگش تسکین داده اند.</div>
                    <div className='main-button'>
                        <button>فال حافظ</button>
                        <button>مجموعه  اشعار </button>
                    </div>
                   </div>
                   
               </div>
             </div>
             <div className='left-section'>
             <img   className='main-img' src={image} alt='dd'/>
             </div>
         </div>
     
    </div>
    )
}

export default Main;