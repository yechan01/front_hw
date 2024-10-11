# JavaScript: class로 요소 조작하기

JavaScript에서 `getElementsByClassName()` 메서드는 클래스명을 기준으로 요소들을 선택할 때 사용됩니다. 같은 클래스를 공유하는 여러 요소가 있을 수 있으므로, 이 메서드는 **HTMLCollection**을 반환하며, 이는 배열처럼 동작합니다. 아래는 그 사용법입니다:

**단계:**
1. `getElementsByClassName()`을 사용해 특정 클래스를 가진 모든 요소를 선택합니다.
2. 반환된 결과는 배열과 유사한 객체이므로, 인덱스로 접근하거나 반복문으로 처리할 수 있습니다.
3. 각 요소에 원하는 DOM 조작을 적용할 수 있습니다.

```javascript
// 클래스명을 기준으로 요소 선택
let elements = document.getElementsByClassName('myClass');

// 각 요소의 내용을 변경하는 반복문
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = '새로운 내용';  // 콘텐츠 수정
}
```


### **netlify에 배포하기**
[링크](-)