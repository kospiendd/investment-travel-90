// Historical dayOne storage identifies the risk lesson; its current schedule day is 13.
const riskLessonDay = 13;
const dayOneQuestions = [
  {objective:'주식에는 원금 손실 가능성이 있으며 원금이 보장되지 않는다는 점을 이해하는가.', options:['그렇다','아니다'], correct:1, title:'주식은 원금이 보장되는 자산이다.', yes:'맞아요! 주식은 투자한 돈보다 적은 돈을 돌려받을 수 있어요.', no:'주식은 원금이 보장되지 않아요. 투자한 돈보다 적은 돈을 돌려받을 수 있어요.'},
  {objective:'회사의 규모·유명세와 투자 원금의 보장을 구분하는가.', options:['그렇다','아니다'], correct:1, title:'유명하고 큰 회사의 주식은 원금이 보장된다.', yes:'맞아요! 유명하고 큰 회사의 주식도 손실이 날 수 있어요.', no:'회사가 크고 유명해도 원금을 보장해주지는 않아요.'},
  {objective:'좋은 실적과 성장 전망을 주가 상승 또는 원금 보장으로 단정하지 않는가.', title:'이 정보만으로 내릴 수 있는 판단은 무엇일까요?',
   headlines:['삼성 107조· SK 83조 영업익 사상 최대','삼성·SK “메모리 공급 부족 더 길어진다”','삼성 HBM4 매출 3배…내년 HBM 완판','하이닉스 내년 용인 팹 가동…투자 대폭 확대'],
   options:['이익이 늘었으니 주가도 반드시 올라요.','유명한 회사이니 투자한 돈은 지켜져요.','이익이 늘었어도 주식 투자에서는 손실이 날 수 있어요.'],correct:2,
   yes:'맞아요! 좋은 실적과 성장 전망이 있어도 주가 상승이나 투자 원금이 보장되는 것은 아니에요.',
   feedback:['회사의 이익이 늘어도 주가가 반드시 오르는 것은 아니에요. 좋은 실적만으로 투자 수익을 보장할 수 없어요.','회사가 크고 유명해도 원금을 보장해주지는 않아요. 주가가 내려가면 손실이 날 수 있어요.']} ,
  {title:'주식이 위험자산인 이유는 ______ 때문이에요.',
   options:['투자하면 반드시 돈을 잃기','수익을 얻을 수도 있지만 원금 손실도 가능하기','유명하지 않은 회사만 주식을 발행하기'],correct:1,
   yes:'맞아요! 핵심은 손실이 확정됐다는 것이 아니라, 손실 가능성이 있다는 거예요.',
   feedback:['주식 투자로 수익을 얻을 수도 있어요. 다만 수익과 원금이 보장되지 않아요.',null,'유명한 회사도 주식을 발행해요. 회사의 유명세와 관계없이 주식에는 원금 손실 가능성이 있어요.'],
   objective:'위험자산 = 나쁜 투자 또는 반드시 손해라는 오해를 피하는가.'},
  {title:'어떻게 받아들이면 좋을까요?',dialogue:'나도 이 회사 주식으로 돈 벌었어. 너도 사면 적어도 원금은 지킬 거야.',
   options:['친구가 벌었으니 내 원금도 안전하겠어요.','친구의 수익 경험만으로 내 원금이 안전하다고 판단할 수는 없어요.','친구가 이미 벌었으니 나는 반드시 손해를 보겠어요.'],correct:1,
   yes:'맞아요! 친구가 수익을 냈다는 사실이 내 투자 결과까지 보장하지는 않아요.',
   feedback:['같은 회사의 주식이라도 투자 결과는 달라질 수 있어요. 다른 사람의 수익이 내 원금을 지켜주지는 않아요.',null,'친구가 수익을 냈다고 내가 반드시 손해 보는 것도 아니에요. 내 결과를 확정할 수 없다는 점이 핵심이에요.'],
   objective:'배운 원칙을 실제로 접할 법한 추천 상황에 적용하는가.'}
];
const freshDayOne = () => ({q:0, answers:[], completed:false});
function startDayOne(restart=false, day=1) {
  if(!availableLesson(day)) return;
  state.activeLessonDay=day;
  delete state.lessonReplay;
  if(progressFor(day).completed){
    if(restart) startLessonReplay(0); else go('dayOneResult');
    return;
  }
  if(restart || progressFor(day).completed) state[progressKey(day)]=day===61?{...freshDayOne(),firstVersion:4,secondVersion:2,thirdVersion:2,multiVersion:1,summaryVersion:1,cgvVersion:1,simpleTermsVersion:1,principleSummaryVersion:1}:day===62?{...freshDayOne(),rainbowVersion:1}:day===36?{...freshDayOne(),introVersion:2}:day===4?{...freshDayOne(),questionVersion:2,orderVersion:2}:day===5?{...freshDayOne(),voteVersion:2}:freshDayOne();
  go('dayOneQuiz');
}
function dayOneQuiz() {
  const html=dayOneQuizContent();
  const previous=btn('← 이전 문제','day-one-previous','secondary',currentProgress().q>0?'':'disabled');
  return html.includes('<div class="study-footer">')?html.replace('<div class="study-footer">','<div class="study-footer">'+previous):html.replace('</section>','<div class="study-footer">'+previous+'</div></section>');
}
function moveLessonQuestion(index) {
  if(state.view!=='dayOneQuiz'||!Number.isInteger(index)||index<0||index>=currentQuestions().length)return;
  currentProgress().q=index;
  go('dayOneQuiz');
}
function dayOneQuizContent() {
  if(currentQuestions()[currentProgress().q].investorReveal&&!currentProgress().capitalInvestorOpened&&!Number.isInteger(currentProgress().answers[currentProgress().q]))return capitalInvestorIntro();
  if(currentQuestions()[currentProgress().q].pending)return pendingCapitalQuiz();
  if(currentQuestions()[currentProgress().q].multiSelect)return capitalMultiQuiz();
  if(currentQuestions()[currentProgress().q].dualQuestions)return capitalDualQuiz();
  if(currentQuestions()[currentProgress().q].chartTask)return chartBTaskQuiz();
  if(currentQuestions()[currentProgress().q].roster)return rosterQuiz();
  if(currentQuestions()[currentProgress().q].matching)return matchingQuiz();
  if(currentQuestions()[currentProgress().q].cloze)return clozeQuiz();
  const day=state.activeLessonDay, questions=currentQuestions();
  const {q:i,answers}=currentProgress(), question=questions[i];
  const isOx=question.options.length===2&&question.choiceType!=='choice';
  const answer=answers[i], answered=Number.isInteger(answer), correct=answer===question.correct;
  return `<section class="study fade day-one">${quizProgress(day,i,questions.length,i+(answered?1:0))}<div class="card"><p class="small">${lessonTitles[day-1]}</p>${questionContext(question,answered)}${capitalInvestorDetails(question)}${question.headlines?`<aside class="quiz-news" aria-label="기사 읽기"><p class="small">기사 속 소식</p>${question.headlines.map(line=>`<p>${line}</p>`).join('')}<a class="small" href="https://www.electimes.com/news/articleView.html?idxno=374087" target="_blank" rel="noopener noreferrer">출처 · 전기신문 ↗</a></aside>`:''}${question.dialogue?`<aside class="quiz-news" aria-label="친구의 말"><p class="small">친구가 말해요.</p><p>“${question.dialogue}”</p></aside>`:''}<h1 class="ox-question">${question.title}</h1>${question.note?`<p class="question-note">${question.note}</p>`:''}<div class="${question.pictureChoices?'b2-picture-choices':isOx?'ox-choices':'news-choices'}">${question.options.map((label,j)=>`<button class="choice ${answered?(j===question.correct?'correct':j===answer?'wrong':''):''}" data-act="day-one-answer" data-id="${j}" ${question.pictureChoices?`aria-label="${String.fromCharCode(65+j)}번 그림 선택"`:""} ${answered?'disabled':''}><span class="letter" aria-hidden="true">${isOx?(j===0?'O':'X'):String.fromCharCode(65+j)}</span>${label}</button>`).join('')}</div>${answered?capitalMarketReveal(question):''}${answered?`<div class="feedback ${correct?'':'wrong'}" role="status"><strong>${correct?'정답이에요!':isOx?`정답은 ‘${question.options[question.correct]}’예요.`:`정답은 ${String.fromCharCode(65+question.correct)}예요.`}</strong><p>${correct?question.yes:(question.feedback?.[answer]||question.no)}</p></div>`:''}</div><div class="study-footer"><span></span>${btn(i===questions.length-1?(questions.some(q=>q.pending)?'학습 경로로':'완료하기'):'다음 문제 →','day-one-next','',answered?'':'disabled')}</div></section>`;
}
function dayOneResult() {
  const day=state.activeLessonDay, questions=currentQuestions();
  const score=currentProgress().answers.filter((a,i)=>a===questions[i]?.correct).length;
  return `<section class="study fade"><div class="card reward"><div class="badge" aria-hidden="true">✓</div><p class="small">${day}일차 · ${lessonTitles[day-1]}</p><h1>${questions.length}문제를 모두 풀었어요!</h1><p class="sub">${day===65?'회사의 발표가 자금과 주식 수에 무엇을 바꾸는지 살펴봐요.<br>발표의 목적과 방법, 투자자의 기대에 따라 주가 반응은 달라질 수 있어요.':day===63?'주식 수가 늘어도 보유 금액이 저절로 늘지는 않아요.<br>무상증자의 목적과 실제 시장 반응을 함께 살펴봐요.':day===64?'매입은 사들이는 것, 소각은 없애는 것이에요.<br>소각으로 전체 발행주식 수가 줄면 내 지분율은 높아질 수 있어요.':day===62?'유상증자의 목적과 방법, 참여 투자자를 함께 살펴봐요.<br>성장에 대한 기대에 따라 주가 반응은 달라질 수 있어요.':day===61?'내 주식 수가 그대로여도 지분율은 낮아질 수 있어요.<br>지분율 변화와 주가 변화는 구분해서 살펴봐야 해요.':day===60?'지지·저항부터 박스권과 역할 전환까지,<br>배운 이름으로 차트의 흐름을 읽었어요.':day===54?'지지와 저항 사이를 오가는 박스권,<br>범위를 벗어나면 돌파 또는 이탈이에요.':day===48?'같은 가격대도 움직임에 따라<br>지지와 저항의 역할이 바뀔 수 있어요.':day===42?'저항 위로 넘어가면 돌파,<br>지지 아래로 내려가면 이탈이에요.':day===36?'상승을 막는 가격대는 저항,<br>하락을 받쳐주는 가격대는 지지예요.':day===1?'주식 한 주는 회사의 소유권을 나눈 작은 조각이에요.':day===2?'조건을 갖추면 한 주로도 투표할 수 있어요.<br>주식 수에 따라 표 수는 달라질 수 있어요.':day===3?'돈으로 받는 현금배당과<br>주식으로 받는 주식배당을 구분해요.':day===4?'배당기준일에 맞춰 결제가 끝나도록<br>거래일을 확인해요.':day===5?'나는 회사의 일부를 가진 주주예요.<br>권리와 배당은 조건을 확인하고 판단해요.':'좋은 회사의 주식도<br>원금은 보장되지 않아요.'}</p><p>기존 학습 기록 · 정답 ${score} / ${questions.length}</p><p class="small">다시 풀어도 완료 기록은 유지돼요.</p>${lessonReplayNavigation(day)}<div class="actions" style="justify-content:center">${btn('학습 경로로 돌아가기','home')}${btn('처음부터 다시 풀기','day-one-restart','secondary')}</div></div></section>`;
}

function startLessonReplay(index=0) {
  const day=state.activeLessonDay;
  if(!availableLesson(day)||!progressFor(day).completed||!Number.isInteger(index)||index<0||index>=currentQuestions().length)return;
  state.lessonReplay={day,progress:{...freshDayOne(),q:index}};
  go('dayOneQuiz');
}
function lessonReplayNavigation(day,index=-1) {

  return `<nav class="replay-navigation" aria-label="문제 선택">${questionsFor(day).map((q,i)=>`<button class="replay-question ${i===index?'active':''}" data-act="replay-question" data-id="${i}" ${i===index?'aria-current="step"':''}>문제 ${i+1}</button>`).join('')}</nav>`;
}
