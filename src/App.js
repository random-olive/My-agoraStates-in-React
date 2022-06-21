//js 기능 구현 아직 안함
import gitIcon from '../src/img/gitIcon.jpeg'
import './style.css';

function App() {
  return (
    <div className="App">

        <section id="header">
        <div id="logo_cont">
      <div className="git_icon">
        <a href="https://github.com/">
        <img src={gitIcon} className="gitcon_img" alt="git_icon" /></a>
      </div>
      <div className="main_logo_set">
        <a href="https://github.com/codestates-seb"><p className="seb">codestates-seb</p></a>
        <a href="https://github.com/codestates-seb/agora-states-fe/discussions"><p className="agora">Agora States</p></a>
        
      </div>
      <div className="private">
        <p className>private</p>
      </div>
    </div>

    <div id="search_cont">  
      <div className="search_bar">
        <div className="search_icon"><span className="fi-rr-search"></span></div>
        <div className="search_input">
          <input type="text" className="search_content" placeholder="Search all sessions..." size="101px"/>
        </div>
        <span className="fi-rr-cross-small"></span>
      </div>
    </div>

    <div id="menu_cont">
      <div className="nightmode_icon"><span className="fi-rr-moon-stars"></span></div>
      <div className="menu_icons"><span className="fi-rr-bookmark"></span></div>
      <div className="menu_icons"><span className="fi-rr-bell"></span></div>
      <div className="menu_icons"><span className="fi-rr-menu-burger"></span></div>
    </div>
        </section>
      
        <section id="body">
        <div id="left_body_cont">
    <div className="category_set">
      <div className="category"><p className="caName">View all</p></div>
      <div className="category"><p className="caName">Git /백엔드 / 번들링 / 최적화</p></div>
      <div className="category"><p className="caName">HTML / CSS / DOM</p></div>
      <div className="category"><p className="caName">JavaScript / Node.js</p></div>
      <div className="category"><p className="caName">React</p></div>
      <div className="category"><p className="caName">UX/UI / 브라우저 / 웹</p></div>
      <div className="category"><p className="caName">기술면접 / 프로젝트</p></div>
      <div className="category"><p className="caName">네트워크 / 인증보안 / API</p></div>
      <div className="category"><p className="caName">자료구조 / 알고리즘 / 컴퓨터공학</p></div>
      <div className="category_edge"><p className="caName">학습방향 및 기타</p></div>
    </div>
    </div>

    <div id="main_body_cont">
      <div className="question container">
        <form className="question_form" action="" type="get" onsubmit="form()"> 
          <div className="form nameInput">
            <label className="form nameInput">Enter your name </label>
            <input className="form_nameInput" type="text" name="name"/>
          </div>
          <div className="form titleInput">
            <label className="form titleInput">Enter your title </label>
            <input className="form_titleInput" type="text" name="title"/>
          </div>
          <div className="form questionInput">
            <label className="form questionInput">Your question </label>
            <textarea className="form_textarea" type="text" required cols="30" rows="10" name="question"></textarea>
          </div>
          <div className="form submit">
            <button className="form_submit" type="submit">submit</button>
          </div>
        </form>
        </div>
        
      
      <div className="main_body_division_line"></div>
  
      <div className="discussion_containers">   
        <ul className="discussion_format"></ul>
      </div>
   
          


       <div id="right_body_cont">
      <div className="notice_set">
      <div className="notice_set_one"><p className="noticeTitle">Notice</p>
        <span className="fi-rr-angle-small-down menu"></span></div>
      <div className="notice_set_two">
        
        <div className="notice one">
          <p className="notice_one text">[Notice]좋은 질문 하는 법</p>
        </div>
        <div id="notice_guide"></div>

        <div className="notice_set_btns">
          <div className="notice_btn pre"><span className="fi-rr-angle-left"></span></div>
          <div className="notice_btn nxt"><span className="fi-rr-angle-right"></span></div>
        </div>

      </div>
    
      </div>

      <div className="popular_tags_set">
        <div className="tag_container_one"><p className="tagTitle">Popular tags</p>
          <span className="fi-rr-angle-small-down menu"></span></div>
        <div className="tag_container_two">
          <span className="tag one"><p className="tag">JavaScript</p></span>
          <span className="tag two"><p className="tag">git</p></span>
          <span className="tag three"><p className="tag">.NET</p></span>
          <span className="tag four"><p className="tag">Devops</p></span>
          <span className="tag five"><p className="tag">Node.js</p></span>
          <span className="tag six"><p className="tag">Vim</p></span>
          <span className="tag seven"><p className="tag">HTML/CSS</p></span>
         
        </div>
      </div>
      
    </div>
</div> 
        </section>





    </div>
  );
}

export default App;
