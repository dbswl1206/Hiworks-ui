---
sidebar: auto
pageClass: custom-page-class
---

# Coding Convention

There is no best method of combining words. The main thing is to be consistent with the convention used, and, if you’re in a team, to come to an agreement on the convention together.

## 컴포넌트 이름에 합성어 사용

root 컴포넌트인 App 컴포넌트를 제외하고 컴포넌트의 이름은 항상 합성어를 사용해야합니다.  
모든 HTML 엘리먼트의 이름은 한 단어이기 때문에 합성어를 사용하는 것은 기존 그리고 향후 HTML엘리먼트와의 충돌을 방지해줍니다.aaaaaaa

##### Bad

```javascript
Vue.component("todo", {
  // ...
});
export default {
  name: "Todo"
  // ...
};
```

##### Good

```javascript
Vue.component("todo-item", {
  // ...
});
export default {
  name: "TodoItem"
  // ...
};
```

## 컴포넌트 데이터

컴포넌트의 data 는 반드시 함수여야 합니다.
컴포넌트(i.e. new Vue를 제외한 모든곳)의 data 프로퍼티의 값은 반드시 객체(object)를 반환하는 함수여야 한다.

#### Bad

```javascript
Vue.component("some-comp", {
  data: {
    foo: "bar"
  }
});
export default {
  data: {
    foo: "bar"
  }
};
```

#### Good

```javascript
Vue.component("some-comp", {
  data: function() {
    return {
      foo: "bar"
    };
  }
});
// In a .vue file
export default {
  data() {
    return {
      foo: "bar"
    };
  }
};
// It's OK to use an object directly in a root
// Vue instance, since only a single instance
// will ever exist.
new Vue({
  data: {
    foo: "bar"
  }
});
```

Visit our [Special Layout Page](/special-layout) to see an example of a custom page layout in action. This component is located in the `.vuepress/components` directory, which is where you register custom layout components and other components you want to have global access to.

## Props 정의

Prop은 가능한 상세하게 정의되어야 합니다.  
커밋 된 코드에서, prop 정의는 적어도 타입은 명시되도록 가능한 상세하게 정의되어야 합니다.

#### Bad

```javascript
props: ["status"];
```

#### Good

```javascript
props: {
  status: String
}

// Even better!
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

## Credits

This codesandbox template was created by [Victoria Bergquist](https://twitter.com/vicbergquist). The information on this page is gathered from the official [VuePress documentation](https://v1.vuepress.vuejs.org) for the latest version of VuePress.

If you would like to contribute to this template, please go to the [codesandbox-vuepress repository](https://github.com/vicbergquist/codesandbox-vuepress) on GitHub.
