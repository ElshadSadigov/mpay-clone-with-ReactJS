import React,{useRef} from "react";
import "./Questions.css";

function Questions() {

  const show1 = useRef();
  const show2 = useRef();
  const show3 = useRef();
  const show4 = useRef();
  const show5 = useRef();


  const ShowBoxs1 = ()=>{
    show1.current.classList.toggle('active')
  }
  const ShowBoxs2 = ()=>{
    show2.current.classList.toggle('active')
  }
  const ShowBoxs3 = ()=>{
    show3.current.classList.toggle('active')
  }
  const ShowBoxs4 = ()=>{
    show4.current.classList.toggle('active')
  }
  const ShowBoxs5 = ()=>{
    show5.current.classList.toggle('active')
  }



  return (
    <div className="question" >
      <div className="question-header">
        <span>F.A.Q</span>
        <h2>Tez-tez verilən suallar</h2>
      </div>
      <div className="question-text">

        <div className="text-1 question-boxs" onClick={ShowBoxs1}>
          <div className="text-1-header text-item">
            <span>Qeydiyyatdan necə keçə bilərəm?</span>
            <i class="fa-sharp fa-solid fa-angle-down"></i>
          </div>
          <div className="text-info" ref={show1}>
            <ol>
              <li>1.mpay.az saytında və ya mobil tətbiqində QEYDİYYAT bölməsində mobil telefonunuzun nömrəsini daxil edin və təsdiqləyin.</li>
              <li>2.Telefon nömrənizə SMS-lə göndərilən 6 rəqəmli kodu daxil edin.</li>
              <li>3.Hesabınıza giriş üçün istifadə edəcəyiniz şifrə yaradın və təsdiqləyin (şifrə ən az 6 simvoldan ibarət olmalıdır (böyük və kiçik hərflər, rəqəmlər))</li>
              <li>4.Qeydiyyat tamamlandıqda telefon nömrəniz və şifrənizlə hesabınıza daxil ola bilərsiniz.</li>
            </ol>
          </div>
        </div>

        <div className="text-2 question-boxs" onClick={ShowBoxs2}>
          <div className="text-2-header text-item">
            <span>6 rəqəmli kodu səhv daxil etdim və nömrəm bloklandı. Nə etməliyəm?</span>
            <i class="fa-sharp fa-solid fa-angle-down"></i>
          </div>
          <div className="text-info" ref={show2}>
            <p>SMS-lə telefon nömrənizə göndərilən kodu 3 dəfə səhv daxil etdikdə nömrəniz bloklanır və 30 dəq. ərzində blokda qalır. Bu halda qeydiyyatdan keçmək istədiyiniz telefon nömrəsindən mpay Müştəri xidmətlərinə zəng edərək bloku açdıra bilərsiniz. Müştəri xidmətlərimizin əlaqə nömrələri: (012) 404 48 88, (050) 404 48 88</p>
          </div>
        </div>

        <div className="text-3 question-boxs" onClick={ShowBoxs3}>
          <div className="text-3-header text-item">
            <span>Şifrəmi unutduqda nə etməliyəm?</span>
            <i class="fa-sharp fa-solid fa-angle-down"></i>  
          </div>
          <div className="text-info" ref={show3}>
            <p>Qeydiyyatda olan mobil nömrəni daxil edib, şifrə olan bölməni boş saxlayaraq, "Şifrəni unutmusunuz?" düyməsini klikləyin və təlimatlara riayət edin.</p>
          </div>
        </div>

        <div className="text-4 question-boxs" onClick={ShowBoxs4}>
          <div className="text-4-header text-item">
            <span>mpay tətbiqində hansı funksionallıqlar var?</span>
            <i class="fa-sharp fa-solid fa-angle-down"></i>
          </div>
          <div className="text-info" ref={show4}>
            <ul>
              <li>Tətbiqimizin aşağıdakı funksionallıqlarından yararlana bilərsiniz:</li>
              <li>Elektron pul qabı hesabı</li>
              <li>Balansın nağd və bank kartı ilə artırılması</li>
              <li>600-dən çox xidmətin ödənişi</li>
              <li>Pul köçürmələri</li>
              <li>Seçilmiş ödənişlər</li>
              <li>Vauçerlər</li>
              <li>Avtomatik ödənişlər (tezliklə)</li>
              <li>Bonuslar (tezliklə)</li>
            </ul>
          </div>
        </div>

        <div className="text-5 question-boxs" onClick={ShowBoxs5}>
          <div className="text-5-header text-item">
            <span>Ödəniş etdiyim zaman problem yaranarsa hara müraciət edim?</span>
            <i class="fa-sharp fa-solid fa-angle-down"></i>
          </div>
          <div className="text-info" ref={show5}>
            <ul>
              <li>Ödəniş etdiyiniz zaman problem yaranarsa aşağıdakı əlaqə vasitələri ilə müştəri xidmətlərimizə müraciət edə bilərsiniz:</li>
              <li>Telefon: 012 404 48 88 | 050 404 48 88 (Whatsapp, Bazar ertəsi - Şənbə: 10:00-17:00)</li>
              <li>İş vaxtı: Bazar ertəsi - Bazar: 8:00-00:00</li>
              <li>Elektron poçt ünvanı: contact@mpay.az</li>
              <li>Mobil tətbiqdə birbaşa proqram daxilində Dəstək bölümündə sorğu yaradaraq müraciət edə bilərsiniz.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Questions;
