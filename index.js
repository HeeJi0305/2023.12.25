// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '300px';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

let modalMessageList = [
  {
    "number": 1, "message": `<2023.12.01 세인이가 우울했던 날🥺>
  세인이 텐션이 낮은데 해줄 수 없는 게 속상했다. 그래도 같이 있으면서 또 더 행복한 날을 선물해줄 수 있도록 해줄게!`},
  { "number": 2, "message": "<2023.12.02 방어+뽀뇨+설렁탕+찹쌀떡 날> 맛있는 방어!! 다음에는 수산시장 가서 먹쟈~ 뽀뇨도 다 봐서 좋았구, 프리가이도 너무 재밌었어ㅎㅎ 통꾸한 거 아직 한 번도 안 써봤찌..?ㅋㅋ👀 설렁탕도 또 먹쟈~ 내 귀갓길 세인이가 커피랑 딸기찹살떡으로 책임져주고 졸릴텐데 맨날 잠들지 않고 챙겨줘서 고마워 항상. 저 즈음에 바쁘고 텐션이 낮았었는데 데이트하고 기분이 나아져서 너무 감사하고 좋았어. 내가 항상 비가 오면 비 온 뒤 맑음으로 바꿔줄게."},
  { "number": 3, "message": "<2023.12.03 세인이 이상한 꿈 꾼 날> 아침에 일어나서 세인이가 나한테 이별통보를 받는 꿈을 꿨다고 말했따... 이상하다... 그럴 리가 없는데... 꿈은 반대니까 세인이랑 백년만년 오래오래 같이 연애하구 같이 행복하게 산다는 꿈인가부다. 세인이 나랑 '오래오래 행복하게 살았습니다.' 같이 해조야대"},
  { "number": 4, "message": "<2023.12.04 더 보고 싶고 묘한 기분인 날> 항상 보고 싶었지만... 아침에 일어난 순간부터 업무를 보면서도, 밥을 먹으면서도 사진을 찍고, 공차에서 귀여운 걸 보고 세인이가 뭘 좋아하는지 보통 뭘 먹는지, 이거 세인이도 좋아하겠다 싶은 생각을 하니, 더 보고 싶고 뭔가 기분이 묘해졌다. 정말 일상을 나누고 싶어졌다고 생각이 든 것 같았다."},
  { "number": 5, "message": "<2023.12.05 티키타카에 기분이 좋은 날> 요즘에도 느끼는 거지만 전화로도, 카톡으로도 이런 티키타카가 맞아서 좋다고 생각해. 어디서 봤는데 장항준이 유퀴즈에서 말했던 것 같은데, 부부는 웃음 코드가 같아야하고 같이 분노하거나 슬픔 포인트가 맞아야한다고 그런 말을 했던 것 같아. 근데, 저 날 전화를 하면서 웃긴 짤들을 보내주고 그걸 보고 내가 웃고, 또 같이 티키타카를 하니까 아 이런 부분이 진짜 티키타카가 잘 맞고 웃음 코드가 맞는 게 아닐까 싶어지더라구."},
  { "number": 6, "message": "<2023.12.06 처음 맞는 굳이데이☘️> 세잎클로버의 꽃말은 행복이래. 네잎클로버처럼 세인이를 만나고 세잎클로버처럼 하루하루를 채워나갈 수 있어서 정말 좋은 나날들이야. 포비도 맛있었는데 갑작스러운 월미도 일정 제안에도 잘 따라와주고, 정말 별 거 없는, 어떻게 보면 재미없었을 수도 있는데 그것마저 재밌게 느껴주고 낭만으로 느껴줘서 고마웠어. 정말 행복했어. 앞으로 우리 굳이데이 많이 많이 즐기자, 같이."},
  { "number": 7, "message": "<2023.12.07 보고시 포도 못 참는 날!> 네사님을 만나뵙고 세인이는 야간 진료인 날. 네네사 님께서 우리가 생각났다고 선물을 챙겨주신 게 감사했고 타인에게 이런 호의와 애정을 받는 게 신기했다. 그렇게 갈까? 갈까? 하다가 결국 못 가고 나온 '보고시 포도 못 참어' 우리만의 밈이 생기는 거 재밌는 것 같아ㅎㅎ" },
  { "number": 8, "message": "<2023.12.08 어디든 따라가고 싶어졌던 날> 세인이, 나, 이지, 고래 님이랑 같이 있는 단톡에서 같이 만나자는 얘기가 나와 세인이가 보낸 짤에 그린 그림이었다. 그 날은 세인이도 친구분들 만나고 나도 친구들이랑 저녁을 먹었는데, 세인이가 보고 싶었다. 물론, 친구들이랑 보내는 시간도 좋았지만.. 보냈던 짤처럼 어디든 꼭 붙잡고 같이 있고, 같이 가고 싶은 기분이 드는 날이었다."},
  { "number": 9, "message": "<2023.12.09 나도 야유회 가고 싶은 날> 세인이가 친구분들이랑 야유회를 갔다... 나는 타고왕 모임에 나갔지만.. with. 여름 언니, 이지, 시럽 님. 즐거웠지만 세인이랑 같이 있으면 더 즐거울 것 같았구, 반대로 세인이랑 야유회를 가면 더 재밌을 것 같았다. 그리구 세인이가 하이디라오춤도 보내줬다ㅋㅋ 귀여워... 바지도 예뻐.. 이렇게 떨어져있는데도 서로 생각하고 하루를 공유해주는 게 떨어져있어서 아쉬우면서도 나름대로 애틋하고 좋았다." },
  { "number": 10, "message": "<2023.12.10 이렇게 행복해도 되나 싶은 날> 가끔 이렇게 행복해도 되나 싶은 날이 있다. 정말 완벽하고, 정말 행복하고, 그냥 안정감있는 그런 날. 굳이데이나 강릉여행이나 한강을 갔을 때나 방어를 먹은 날이나. 아침에 데리러 가고, 롯데마트에 갔다가 닫혀있는 모습에 또 절망했다가 다행히 토이저러스가 열려 있어서 또 신나게 데이트하고 베이글도 먹고. 미키마우스 깜빡해서 속상한 모습에 밤에 잠깐 가서 보고. 이렇게 행복한데 나중에 질리면 어떡히지 싶다가도 최선을 다해서 사랑하고 싶은 마음도 들게 된다." },
  { "number": 11, "message": "<2023.12.11 덮밥+케이크+팝업카드 날> 보고시 포도못참어 해서 급하게 성수데이트를 하게 되었다. 둘 다 꼬질 희지, 꼬질 세인이라 가보고 싶은 곳은 살짝 다음으로 기약하고 근처에 있는 홍콩식 덮밥집에 갔다가 케이크 집을 갔다~ 케아크 맛있었다 히히~ 그리고 세인이한테 크리스마스 팝업 카드를 줬는데 예쁘게 받아줘서 고마웠다. 비도 오고 급하게 만나는 날이었는데 그래도 즐거웠고 그냥 같이 있어서 좋았다. 그런 날이었다" },
  { "number": 12, "message": "<2023.12.12 야부야 나랑 살쟈 하고 시픈 날> 조금씩 야부야, 자기야아 하게 되는 날이었다. 부끄럽지만 서로 찜꽁하게 되는 느낌이었구 몬가 나한테는 용기가 필요해서.. 세인이가 조금 내 반응이 시큰둥해보일 수도 있겠다 싶었다. 그리구 선물 준 팝업 카드를 어머님께서 여기저기 두셨다는 사진을 보고 솔직히 뿌듯해졌다. 어머님께 더 잘보이고 싶어진다." },
  { "number": 13, "message": "<2023.12.13 브롤스타즈 같이 처음한 날> 세인공쥬랑 희지할배, 딜 넣고 힐 주고! 진짜 같이 재밌게 하는 게임이 진짜 오랜만인데, 거기다가 브롤스타즈는 진짜 아예 처음!! 세인이랑 같이 즐겁게 해서 너무 좋았다. 이런 날을 보내니까 같이 살면서 이런 일상을 같이 보내면 좋겠다~ 싶었다. 같이 퇴근해서 밥 먹고, 같이 치우고, 같이 유튜브나 틱톡, 릴스 보다가 양치하구 세수하고, 누워서 잠자기 전에 몇 판 브롤 고? 하고. 그런 날을 같이 그리고 싶어졌다." },
  { "number": 14, "message": "<2023.12.14 대화할 수 있음에 감사한 날> 세인이랑 노원에서 단 둘이 데이트를 즐겼다. 세인이가 평소 먹는 마라탕도 먹고 꿔바로우도 먹었다. 양도 많고 진짜 맛있었다. 꿔바로우 진짜 진짜 맛있음... 딱딱하지도 않고 달큰하고 마라탕은 말해모해.. 또 먹고 싶어지는 맛... 단 둘이 있으면 시간이 너무 빨리 간다. 비도 오고 나름 운치 있다고 생각했는데, 시간 가는 줄 모르고 데이트를 즐기다 부랴부랴 갔는데... 세인이가 부랴부랴 가게된 이유, 마음을 말해줘서 너무 고마웠다. 나를 그 만큼 신경 써주는 것도 고마웠다. 나도 내가 어떤 마음이었는지, 생각은 어땠는지 대화하면서.. 이런 경험을 할 수 있음에 감사했고 그 만큼 세인이가 더 애틋하게 느꼈졌다." },
  { "number": 15, "message": "<2023.12.15 세인이보다 먼저 자버린 날> 세인이가 회식인데 꾸벅꾸벅 잠들었다가 깼다가 해버렸다. 다음 날 일어나서.. 좀.. 힝... 싶었다. 전화도 해주고 들어갈 때까지 일어나있었어야했는데ㅠㅠ 다음 날 카톡 보낸 거 보니까 세인이도 나도 술도 안 마시는데 이게 뭐라고 보낸 거야.. 싶었다." },
  { "number": 16, "message": "<2023.12.16 일상을 공유해주는 게 좋은 날> 나는 하루종일 집에 있었는데, 세인이가 보내준 사진에서 하늘을 보고 예쁜 하늘에 예쁜 세인이가 찍혀 있는 게 좋다. 항상 사진을 찍어서 보내주는 게 일상을 공유 받는 기분이라, 진짜 같이 있고 싶다싶기도 하지만 함께하는 것 같아서 세인이가 보내주는 사진들이 항상 좋다. 어제 브롤한 것도 너무 즐거웠따 히히" },
  { "number": 17, "message": "<2023.12.17 드디어 오늘 보내야지 싶은 날> 17일. 결전의 날이다. 이미 12시가 지나버렸지만 그래도 오늘 웹사이트 제작 중이니, 오늘로 하쟈. 드디어 내일 세인이를 보고 오늘 웹사이트를 보내줄 것이다💪" },
  { "number": 18, "message": "<2023.12.18 종일 같이 있으면서 보내는 날> 드디어 데이트의 날이다. 오늘 할 게 많다! 전에도 말했지만, 오늘 데이트는 세인이에게 어떤 데이트가 될까, 좋은 날, 좋은 시간이 됐으면 좋겠다. 얼른 보고 싶어. 나는 분명 세인이를 보는 순간, 아니 사실 보기 전 지금부터 좋은 하루가 시작됐으니까."},
  { "number": 19, "message": "크리스마스까지 얼마 남지는 않았지만 같이 기다리면서 하루하루 이 카드들 열면서 크리스마스 데이트 기다리자. 제대로 이런 거 해보는 건 처음이라 많이 미흡하고 늦었지만 재밌게 즐겨줬으면 좋겠다ㅎㅎ 그리고 나중에 이게 추억으로 남았으면 좋겠어~ 나중에 또 재밌는 거 해줄게. 그리구, 사진처럼 우리 진짜 내년 4월쯤에 일본 가쟈~ 실바니아도 사고 같이 맛있는 것도 먹구ㅎㅎ" },
  { "number": 20, "message": "앞으로 맞을 크리스마스는 더 큰 트리도 만들고, 머리띠도 쓰고, 크리스마스 파티도 하고, 단 둘이 보내기도하고, 다른 분들이랑 같이 보내기도하고, 서울에서, 지방에서, 하와이에서 다양하게 같이 보내보자ㅎㅎ 지금까지 나날들보다 미래가 기대될 수 있게 만들어줄게." },
  { "number": 21, "message": "강릉 여행간 것도 너무 좋았어. 짧았는데도, 커플 여행이구 같이 간 여행이구 히히 밤에도 좋았구 또 보고 싶다👀 다양하게 많이 데려다줄게. 그게 어디든 같이 가줄게. 분명 갔다가 별로인 곳도 있을 수 있고 우리 둘이 의견이 안 맞아서 티격태격 할 수도 있겠지만 그때도 우리는 결국 잘 풀고 한 손은 세인이 손 잡고 한 손은 운전대 잡고 같이 올라올 거야. 우리 그렇게 같이 앞으로 지내보쟈" },
  { "number": 22, "message": "이 날도 좋았어. 낙엽이 은하수처럼 쏟아지고, 불이 예쁘게 타오르고 맛있는 고기, 즐거운 음악, 좋은 사람들, 더 좋은 내 여찡구랑 있을 수 있어서 너무 행복했어. 가는 길이 막히는 것조차 즐겁게 느껴주고 피곤할 법도 한데 괜찮게 받아주는 게 항상 고맙고 감사해. 세인이가 그렇게 해줘서 막혀서 걱정하게 되는 부분들도 세인이가 괜찮아서 다행으로 느껴져서 나도 마음이 놓여. 아 그리고!! 문득 생각났는데, 나중에 우리 글램핑이든 어디 바베큐 해먹든 통대창 사가는 거 어떨까..? 약간 은박 접시 같은 것도 사서 그 위에서 따로 하면 구워 먹을 수 있지 않을까!?!" },
  { "number": 23, "message": "<2023.12.23 참 부끄럽고 민망한 날> 어제 세인이랑 살짝 다투고 그냥 여러모로 부끄러운 날이었다. 오늘 아침에 캘린더를 확인해보니 아침엔 웬걸! 어드벤트 캘린더도 잘못 해부렀네..!? 어떻게 지금 수습하고 있는 중인데.. 솔직히 어제 세인이가 나한테 실망했을 것 같아서 무서웠다. 아니 사실 실망하는게 당연하겠지만.. 뭔가 더 말을 하기엔 변명같고.. 그래서 더 말을 못 했다.. 여러모로 미안하고.. 울컥하고.. 속상한 날이었다. 내가 왜 그랬지 싶다가도 그치만! 세인이가 나한테 기회를 준다면!! 앞으로가 중요한 거니까 내가 잘 하고 노력할게... 반성 중...입니🥺" },
  { "number": 24, "message": "세인아 25일까지 하루 남았는데, 어드벤트 캘린터 재밌었는지 모르겠어. 나는 만들면서 재밌었구 세인이랑 추억을 돌아볼 수 있어서 좋았어. 그리고 이렇게 급하게 수습도 하고 우리 사귀면서 여러모로 일들이 많았는데 내가 즐거웠던 만큼 세인이도 즐거웠으면 좋겠다. 싶었어. 그리고 오랫동안 같이 있을 수 있으면 좋겠다. 오래오래 행복하게 살았습니다 처럼. 그렇게 만들어줄게 공쥬야" },
  { "number": 25, "message": "12월 25일!!! 메리 크리스마스!!! 세인아, 올해 어땠어? 괜찮았어? 나는 올해 꽤 많은 일들이 있었는데 그 중 제일 잘한 일, 좋은 일, 감사한 일 등등 모든 긍정적인 일 중 가장 잘한 일은 세인이를 만난 일이라고 생각해. 아무리 표현해도 모자라고 했던 말 또하고 또하고 해서 지겨워진다고 해도.. 내 마음을 표현하기 모자란 것 같아. 정말 많이 고맙고 많이 사랑해 마니 마니 진짜루 사랑해애.. 내년에도 우리 같이 있쟈 메리 크리스마스" }
]
  ;



