import React from 'react';
import './index.css';
import { BsChevronDown } from "react-icons/bs";


const click = () => {
    var hover = document.getElementsByClassName("site-nav__dropdown");
    hover[0].hidden=false;
   }
   const click2 = () => {
     var hover = document.getElementsByClassName("site-nav__dropdown");
     setTimeout(
       function() {
         hover[0].hidden=true;
       }
       .bind(this),
       2000
   );
    }

    const Header = ({ Header }) => {
      
    return(
        <header className="site-header" id="head">

        <div className="wrapper">
          <div className="grid--full">
          <div className="grid__item">
            <h1 className="site-header__logo">
              <div className="logo__image-wrapper supports-js">
                <a href="/" itemProp="url" style={{paddingTop:"44.480000000000004%"}}>
                 <img className="logo__image lazyautosizes lazyloaded" src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-9/169137142_271093571279858_4253694653634562094_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=q_rskIP4DfQAX8sEBf-&tn=zIuKf1K5Xv9ijMw0&_nc_ht=scontent.fcai19-2.fna&oh=e421c545640fffc9f1ceb8b3809c6437&oe=61874FBB"/>
                </a>
              </div>
            </h1>
          </div>

            </div>
          <div className="grid--full medium-down--hide">
 
          </div>
          
        </div>
      </header>
    
    

    );
    }
    export default Header;