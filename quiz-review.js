// Review navigation is independent of learner answers, completion, and rewards.
let reviewQuestionIndex = 0;
let reviewDay = 1;
const reviewLabels = ['원금이 보장되는 자산일까?', '큰 회사의 주식은 안전할까?', '좋은 실적 기사를 어떻게 판단할까?', '위험자산이라는 말의 의미는?', '친구가 수익을 냈다면?'];
function quizReview() {
  const questions=questionsFor(reviewDay);
  const i=reviewQuestionIndex, q=questions[i], ox=q.options.length===2&&q.choiceType!=='choice';
  const label=j=>ox?q.options[j]:`${String.fromCharCode(65+j)}. ${q.options[j]}`;
  return `<section class="quiz-review day-one fade">
    ${quizProgress(reviewDay,i,questions.length,i+1,true)}
    <header class="review-heading"><h1>${lessonTitles[reviewDay-1]}</h1></header>
    <nav class="replay-navigation" aria-label="문제 목록">${questions.map((item,j)=>`<button class="replay-question ${i===j?'active':''}" data-act="review-select" data-id="${j}" ${i===j?'aria-current="step"':''}>문제 ${j+1}</button>`).join('')}</nav>
    <article class="card review-detail" aria-labelledby="review-question">
      <p class="small">문제 ${i+1} / ${questions.length} · ${q.pending?'준비 중':q.multiSelect?'복수 선택':q.dualQuestions?`${q.dualQuestions.length}개 질문`:q.chartTask||q.pictureChoices?'그림 선택':q.roster?'명단 만들기':q.matching?'짝 연결':q.cloze?'빈칸 완성':ox?'OX':q.dialogue?'대화 선택':(q.headlines||q.article)?'기사 적용':q.context?'상황 선택':'빈칸 선택'}</p>
      ${questionContext(q,true)}${capitalInvestorDetails(q)}${capitalMarketReveal(q)}
      ${q.headlines?`<aside class="quiz-news" aria-label="기사 읽기"><p class="small">기사 속 소식</p>${q.headlines.map(line=>`<p>${line}</p>`).join('')}<a class="small" href="https://www.electimes.com/news/articleView.html?idxno=374087" target="_blank" rel="noopener noreferrer">출처 · 전기신문 ↗</a></aside>`:''}
      ${q.dialogue?`<aside class="quiz-news" aria-label="친구의 말"><p class="small">친구가 말해요.</p><p>“${q.dialogue}”</p></aside>`:''}
      <h2 id="review-question" class="ox-question">${q.title}</h2>${q.note?`<p class="question-note">${q.note}</p>`:''}
      ${q.pending?'<p>문제를 준비하고 있어요.</p>':q.multiSelect?capitalMultiReview(q):q.dualQuestions?capitalDualReview(q):q.chartTask?chartBTaskReview(q):q.roster?rosterReview(q):q.matching?matchingReview(q):q.cloze?clozeReview(q):`      <ul class="review-options">${q.options.map((o,j)=>`<li class="${j===q.correct?'review-correct':''}"><span>${label(j)}</span>${j===q.correct?'<strong>정답</strong>':''}</li>`).join('')}</ul>
      <section class="review-feedback"><h3>정답 피드백</h3><p>${q.yes}</p></section>
      ${q.options.map((o,j)=>j===q.correct?'':`<section class="review-feedback"><h3>오답 피드백 · ${ox?`‘${o}’ 선택`:`${String.fromCharCode(65+j)} 선택`}</h3><p>${q.feedback?.[j]||q.no}</p></section>`).join('')}
`}
    </article>
    <div class="study-footer review-footer">${btn('← 이전 문제','review-select','secondary',`data-id="${i-1}" ${i===0?'disabled':''}`)}<span class="small">${i+1} / ${questions.length}</span>${btn('다음 문제 →','review-select','',`data-id="${i+1}" ${i===questions.length-1?'disabled':''}`)}</div>
    <button class="back" data-act="curriculum">전체 커리큘럼으로 돌아가기</button>
  </section>`;
}
