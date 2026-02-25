# React Hooks Practice

## 1. useState

### 1.1 Khái niệm

useState được dùng để quản lý state trong Functional Component.  
Khi state thay đổi, React sẽ tự động re-render component.

---

### 1.2 Cú pháp

```js
const [state, setState] = useState(initialValue);
```

Trong đó:

- state: giá trị hiện tại
- setState: hàm cập nhật state
- initialValue: giá trị khởi tạo

---

### 1.3 Ứng dụng trong project

Trong project này, useState được sử dụng để:

- Lưu danh sách sinh viên (students)
- Lưu giá trị input (name)

```js
const [students, setStudents] = useState([]);
const [name, setName] = useState("");
```

---

### 1.4 Cách hoạt động

Khi người dùng nhập tên và nhấn nút "Add", hàm xử lý sẽ được gọi:

```js
const handleAdd = () => {
  if (!name) return;

  const newStudent = {
    id: Date.now(),
    name: name
  };

  // Tạo mảng mới thay vì thay đổi trực tiếp mảng cũ
  setStudents([...students, newStudent]);

  setName("");
};
```

Giải thích:

- Không thay đổi trực tiếp state cũ
- Sử dụng toán tử spread (...) để tạo mảng mới
- Điều này đảm bảo tính bất biến (immutability) trong React
- Khi state thay đổi → React re-render component

---

### 1.5 Minh chứng re-render

Thêm dòng sau vào component:

```js
console.log("App render");
```

Khi thêm sinh viên, console sẽ hiển thị:

```
App render
App render
App render
```

Điều này chứng minh rằng mỗi khi state thay đổi, React sẽ tự động render lại component.

---

### 1.6 Vì sao cần useState?

Nếu không sử dụng useState:

- React sẽ không theo dõi dữ liệu
- Giao diện sẽ không tự động cập nhật

useState giúp:

- Quản lý dữ liệu động
- Đồng bộ giữa dữ liệu và giao diện
- Tạo tính tương tác cho ứng dụng

---

### 1.7 Kết luận

useState phù hợp khi:

- State đơn giản
- Ít hành động xử lý
- Logic cập nhật không quá phức tạp

Khi state trở nên phức tạp hơn (nhiều action như add, delete, update), nên sử dụng useReducer.