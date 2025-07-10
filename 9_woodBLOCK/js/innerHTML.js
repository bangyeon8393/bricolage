document.getElementById('header').innerHTML = `<div id="header_top">
                <div class="event_toogle">
                    <!-- 마이페이지 버튼 -->
                    <div class="toggle" data-target="#modal-coupon"><a href="#">공식몰 가입하고 쿠폰 받으러 가기</a></div>
                    <!-- 마이페이지 모달 -->
                    <div class="modal" id="modal-coupon">
                        <div class="modal-content">
                            <iframe src="sign_in.html" width="1024" height="800" style="border: none;"></iframe>
                        </div>
                        <div class="close"><span></span><span></span></div>
                    </div>
                </div>
            </div>
            <div id="header_lnb">
                <div id="left_lnb">
                    <div class="logo">
                        <a href="index.html"><img src="img/logo.jpg" alt="WOODBLOCK"></a>
                    </div>
                    <nav id="lnb">
                        <h3 class="hidden">주 메뉴</h3>
                        <ul class="menu" style="text-align: center;">
                            <li><a href="brand_story.html">BRAND</a>
                                <ul class="sub">
                                    <li><a href="brand_story.html">Brand Story</a></li>
                                </ul>
                            </li>
                            <li><a href="adult.html">SHOP</a>
                                <ul class="sub">
                                    <li><a href="adult.html">Adult</a></li>
                                    <li><a href="teenager.html">Teenager</a></li>
                                    <li><a href="pet.html">Pet</a></li>
                                    <li><a href="kitchen.html">Kitchen</a></li>
                                </ul>
                            </li>
                            <li><a href="notice.html">COMMUNITY</a>
                                <ul class="sub">
                                    <li><a href="notice.html">Notice</a></li>
                                    <li><a href="event.html">Event</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="right_lnb">
                    <ul class="modal_toogle">
                        <!-- 마이페이지 버튼 -->
                        <li class="toggle" data-target="#modal-mypage">
                            <a href="#"><img src="img/mypage.svg" alt="mypage"></a>
                        </li>
                        <!-- 마이페이지 모달 -->
                        <div class="modal" id="modal-mypage">
                            <div class="modal-content">
                                <iframe src="sign_in.html" width="1024" height="800" style="border: none;"></iframe>
                            </div>
                            <div class="close"><span></span><span></span></div>
                        </div>
                        <!-- 카트페이지 버튼 -->
                        <li class="toggle" data-target="#modal-cart">
                            <a href="#"><img src="img/cart.svg" alt="cart"></a>
                        </li>
                        <!-- 카트페이지 모달 -->
                        <div class="modal" id="modal-cart">
                            <div class="modal-content">
                                <iframe src="cart.html" width="1024" height="800" style="border: none;"></iframe>
                            </div>
                            <div class="close"><span></span><span></span></div>
                        </div>
                        <!-- 서치페이지 버튼 -->
                        <li class="toggle" data-target="#modal-search">
                            <a href="#"><img src="img/search.svg" alt="search"></a>
                        </li>
                        <!-- 서치페이지 모달 -->
                        <div class="modal" id="modal-search">
                            <div class="modal-content">
                                <iframe src="search.html" width="1024" height="800" style="border: none;"></iframe>
                            </div>
                            <div class="close"><span></span><span></span></div>
                        </div>

                    </ul>

                </div>
            </div>`;
document.getElementById('footer').innerHTML = `<div id="fnb">
                <div id="notice">
                    <ul>
                        <li>주문 | 취소 | 배송문의 | 제품상담 </li>
                        <li><a href="#">고객센터 1644-4453</a></li>
                        <li>월-금 10:00~17:00 (점심 12:00~13:00) </li>
                        <li>주말 및 공휴일 휴무</li>
                        <li><a href="faq.html">Q&amp;A 바로가기</a></li>
                        <li><a href="#">이용약관 | 개인정보처리방침</a></li>
                    </ul>
                </div>
                <address>
                    <ul>
                        <a href="index.html"><img src="img/main_logo.png"></a>
                        <li>우드블럭 | 대표: 엄혜용 | 사업자 등록번호: <a href="#">636-81-01748</a></li>
                        <li>주소: 전북특별자치도 전주시 완산구 오목대길 57, 1층 </li>
                        <li>통신판매업신고: 2020-전주완산-1074 | 개인정보관리책임자: 엄혜용</li>
                        <li> </li>
                        <li>COPYRIGHT &copy; WOODBLOCK. ALL RIGHTS RESERVED.</li>
                    </ul>
                </address>
                <p id="fixed"><a href="#" alt="top"><img src="img/scrollToTop.svg" alt=""></a></p>
            </div>`;