# useState

# useEffect(function), (function, []), (function, [dep])
- luôn thực hiện callback sau khi component mounted
- cleanup function luôn được gọi trước khi component unmouted
- return function cleanup tránh xảy ra memry leak
- Call API
- Timer
- 
# React.memo
- Tránh render lại component con
- Kiểm tra sự thay đổi của các prop
- Prop là một hàm vẫn re-render
# useCallback(function, [])
- Bọc các hàm làm prop hoặc các prop có kiểu dữ liệu tham chiếu. VD hàm Increase click ở component con
- Sử dụng cùng React.memo
# useMemo(function, [])

# useReducer(reducer(function - switch.case), initState) = [state, dispath]
- thay thế useState cho những tác vụ lớn hơn

# useContext
