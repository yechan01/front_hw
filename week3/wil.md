## CSS Margin과 Padding 사용법

### **1. Margin**

**Margin**은 요소의 경계(border) 바깥의 공간을 정의합니다. 요소와 다른 요소들 간의 외부 간격을 설정할 때 사용됩니다.

```css
/* 예시 */
.element {
  margin: 20px; /* 모든 방향에 20px 간격 */
  margin-top: 10px; /* 위쪽 간격 */
  margin-right: 15px; /* 오른쪽 간격 */
}
```

- 단위: px, %, em, rem 등 사용 가능.
- 네 방향(top, right, bottom, left)을 각각 설정하거나, 하나의 값으로 전체를 설정할 수 있습니다.
- 자세한 설명은 [MDN Web Docs - margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) 에서 확인할 수 있습니다.

### **2. Padding**

**Padding**은 요소의 경계(border)와 콘텐츠(content) 사이의 내부 공간을 설정합니다. 콘텐츠와 요소 경계 사이의 간격을 정의합니다.

```CSS
/* 예시 */
.element {
  padding: 20px; /* 모든 방향에 20px 간격 */
  padding-left: 10px; /* 왼쪽 간격 */
  padding-bottom: 15px; /* 아래쪽 간격 */
}
```

- 단위: px, %, em, rem 등 사용 가능.
- 네 방향을 각각 설정하거나, 하나의 값으로 전체를 설정할 수 있습니다.
- 자세한 설명은 [MDN Web Docs - padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) 에서 확인할 수 있습니다.



### **# netlify에 배포하기**
[링크](https://dreamy-lamington-208b0e.netlify.app)