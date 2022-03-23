# useState

# useEffect(function), (function, []), (function, [dep])

# React.memo
- Tránh render lại component con
- Kiểm tra sự thay đổi của các prop
- Prop là một hàm vẫn re-render
# useCallback(function, [])
- Bọc các hàm làm prop hoặc các prop có kiểu dữ liệu tham chiếu. VD hàm Increase click ở component con
- Sử dụng cùng React.memo
# useMemo(function, [])

