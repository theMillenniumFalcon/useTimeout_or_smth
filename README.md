Declarative adaptation of `setTimeout` based on [Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) about `setInterval`

#### install

```
npm install use-timeout
```

&nbsp;

#### usage

```js
import useTimeout from 'use-timeout'
function SimpleExample() {
  const [message, setMessage] = useState('changing in 2 seconds...')
  useTimeout(() => setMessage('changed!'), 2000)
  return <div>{message}</div>
}
```

&nbsp;

#### but why?

Long answer long: [overreacted.io/making-setinterval-declarative-with-react-hooks/](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

&nbsp;

#### credits:

Siddharth and alex