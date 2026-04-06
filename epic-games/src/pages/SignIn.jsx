import { Link } from 'react-router-dom';

const consoles = [
  { id: 1, name: "PlayStation Network", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/PlayStation_App_Icon.jpg", iconClass: "playstation-icon" },
  { id: 2, name: "Xbox network", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzY5LjkgMzE4LjJjNDQuMyA1NC4zIDY0LjcgOTguOCA1NC40IDExOC43Yy03LjkgMTUuMS01Ni43IDQ0LjYtOTIuNiA1NS45Yy0yOS42IDkuMy02OC40IDEzLjMtMTAwLjQgMTAuMmMtMzguMi0zLjctNzYuOS0xNy40LTExMC4xLTM5QzkzLjMgNDQ1LjggODcgNDM4LjMgODcgNDIzLjRjMC0yOS45IDMyLjktODIuMyA4OS4yLTE0Mi4xYzMyLTMzLjkgNzYuNS03My43IDgxLjQtNzIuNmM5LjQgMi4xIDg0LjMgNzUuMSAxMTIuMyAxMDkuNU0xODguNiAxNDMuOGMtMjkuNy0yNi45LTU4LjEtNTMuOS04Ni40LTYzLjRjLTE1LjItNS4xLTE2LjMtNC44LTI4LjcgOC4xYy0yOS4yIDMwLjQtNTMuNSA3OS43LTYwLjMgMTIyLjRjLTUuNCAzNC4yLTYuMSA0My44LTQuMiA2MC41YzUuNiA1MC41IDE3LjMgODUuNCA0MC41IDEyMC45YzkuNSAxNC42IDEyLjEgMTcuMyA5LjMgOS45Yy00LjItMTEtLjMtMzcuNSA5LjUtNjRjMTQuMy0zOSA1My45LTExMi45IDEyMC4zLTE5NC40bTMxMS42IDYzLjVDNDgzLjMgMTI3LjMgNDMyLjcgNzcgNDI1LjYgNzdjLTcuMyAwLTI0LjIgNi41LTM2IDEzLjljLTIzLjMgMTQuNS00MSAzMS40LTY0LjMgNTIuOEMzNjcuNyAxOTcgNDI3LjUgMjgzLjEgNDQ4LjIgMzQ2YzYuOCAyMC43IDkuNyA0MS4xIDcuNCA1Mi4zYy0xLjcgOC41LTEuNyA4LjUgMS40IDQuNmM2LjEtNy43IDE5LjktMzEuMyAyNS40LTQzLjVjNy40LTE2LjIgMTUtNDAuMiAxOC42LTU4LjdjNC4zLTIyLjUgMy45LTcwLjgtLjgtOTMuNE0xNDEuMyA0M0MxODkgNDAuNSAyNTEgNzcuNSAyNTUuNiA3OC40Yy43LjEgMTAuNC00LjIgMjEuNi05LjdjNjMuOS0zMS4xIDk0LTI1LjggMTA3LjQtMjUuMmMtNjMuOS0zOS4zLTE1MictNTAtMjMzLjktMTEuN2MtMjMuNCAxMS4xLTI0IDExLjktOS40IDExLjIiLz48L3N2Zz4=", iconClass: "xbox-icon" },
  { id: 3, name: "Nintendo Account", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHJlY3Qgd2lkdGg9IjQxIiBoZWlnaHQ9IjEwIiB4PSIzLjUiIHk9IjE5LjE4IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcng9IjUiIHJ5PSI1IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTguNSAyNi43OTF2LTUuMjQ1bDMuOTcyIDUuMjQ1di01LjI0NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTQuMjA0IiBjeT0iMjEuNzMzIiByPSIuNzUiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE0LjIwNCAyMy41Njl2My4yMjJtNi42OTktNC40NTh2NC40NThtLS43ODctMy4yMjJoMS41NzRtOC43MTUgMy4yMjJ2LTEuNzIzYzAtLjgyOC0uNjcxLTEuNDk5LTEuNDk5LTEuNDk5aDBjLS44MjggMC0xLjQ5OS42NzEtMS40OTkgMS40OTltMCAxLjcyM3YtMy4yMjJtLTguNDg3IDMuMjIydi0xLjcyM2MwLS44MjgtLjY3LTEuNDk5LTEuNDk4LTEuNDk5aDBjLS44MjggMC0xLjQ5OS42NzEtMS40OTkgMS40OTltMCAxLjcyM3YtMy4yMjJtOS4zMDcgMi45NDVhMS41IDEuNSAwIDAgMS0uODY5LjI3N2gwYTEuNSAxLjUgMCAwIDEtMS40OTgtMS40OTh2LS4yMjVjMC0uODI4LjY3LTEuNDk5IDEuNDk4LTEuNDk5aDBjLjgyOCAwIDEuNDk5LjY3MSAxLjQ5OSAxLjQ5OXYuMTEyaC0yLjk5N20xMi4xLS4xMTJjMC0uODI4LS42NzEtMS40OTktMS40OTktMS40OTloMGMtLjgyOCAwLTEuNDk5LjY3MS0xLjQ5OSAxLjQ5OXYuMjI1YzAgLjgyNy42NzEgMS40OTggMS41IDEuNDk4aDBjLjgyNyAwIDEuNDk4LS42NyAxLjQ5OC0xLjQ5OG0wIDEuNDk4di01LjI0NW0xLjU0IDMuNTIyYTEuNDk5IDEuNDk5IDAgMCAxIDIuOTk3IDB2LjIyNWExLjQ5OSAxLjQ5OSAwIDAgMS0yLjk5NyAweiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+", iconClass: "nintendo-icon" }
];

const others = [
  { id: 1, name: "Google", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmNDQzMzYiIGQ9Ik03LjIwOSAxLjA2MWMuNzI1LS4wODEgMS4xNTQtLjA4MSAxLjkzMyAwYTYuNTcgNi41NyAwIDAgMSAzLjY1IDEuODJhMTAwIDEwMCAwIDAgMC0xLjk4NiAxLjkzcS0xLjg3Ni0xLjU5LTQuMTg4LS43MzRxLTEuNjk2Ljc4LTIuMzYyIDIuNTI4YTc4IDc4IDAgMCAxLTIuMTQ4LTEuNjU4YS4yNi4yNiAwIDAgMC0uMTYtLjAyN3ExLjY4My0zLjI0NSA1LjI2LTMuODYiIG9wYWNpdHk9IjAuOTg3Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTEuOTQ2IDQuOTIxLjA4NS0uMDEzLjE2MS4wMjdhNzggNzggMCAwIDAgMi4xNDggMS42NThBNy42IDcuNiAwIDAgMCA0LjA0IDcuOTlxLjAzNy42NzguMjE1IDEuMzMxTDIgMTEuMTE2US41MjcgOC4wMzggMS45NDYgNC45MiIgb3BhY2l0eT0iMC45OTciLz48cGF0aCBmaWxsPSIjNDQ4YWZmIiBkPSJNMTIuNjg1IDEzLjI5YTI2IDI2IDAgMCAwLTIuMjAyLTEuNzRxMS4xNS0uODEyIDEuMzk2LTIuMjI4SDguMTIyVjYuNzEzcTMuMjUtLjAyNyA2LjQ5Ny4wNTVxLjYxNiAzLjM0NS0xLjQyMyA2LjAzMmE3IDcgMCAwIDEtLjUxLjQ5IiBvcGFjaXR5PSIwLjk5OSIvPjxwYXRoIGZpbGw9IiM0M2EwNDciIGQ9Ik00LjI1NSA5LjMyMnExLjIzIDMuMDU3IDQuNTEgMi44NTRhMy45NCAzLjk0IDAgMCAwIDEuNzE4LS42MjZxMS4xNDguODEyIDIuMjAyIDEuNzRhNi42MiA2LjYyIDAgMCAxLTQuMDI3IDEuNjg0YTYuNCA2LjQgMCAwIDEtMS4wMiAwUTMuODIgMTQuNTI0IDIgMTEuMTE2eiIgb3BhY2l0eT0iMC45OTMiLz48L2c+PC9zdmc+", iconClass: "google-icon" },
  { id: 2, name: "Steam", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDJhMTAgMTAgMCAwIDEgMTAgMTBhMTAgMTAgMCAwIDEtMTAgMTBjLTQuNiAwLTguNDUtMy4wOC05LjY0LTcuMjdsMy44MyAxLjU4YTIuODQgMi44NCAwIDAgMCAyLjc4IDIuMjdjMS41NiAwIDIuODMtMS4yNyAyLjgzLTIuODN2LS4xM2wzLjQtMi40M2guMDhjMi4wOCAwIDMuNzctMS42OSAzLjc3LTMuNzdzLTEuNjktMy43Ny0zLjc3LTMuN3MtMy43OCAxLjY5LTMuNzggMy43di4wNWwtMi4zNyAzLjQ2bC0uMTYtLjAxYy0uNTkgMC0xLjE0LjE4LTEuNTkuNDlMMiAxMS4yQzIuNDMgNi4wNSA2LjczIDIgMTIgMk04LjI4IDE3LjE3Yy44LjMzIDEuNzItLjA0IDIuMDUtLjg0M3MtLjA1LTEuNzEtLjgzLTIuMDRsLTEuMjgtLjUzYy40OS0uMTggMS4wNC0uMTkgMS41Ni4wM2MuNTMuMjEuOTQuNjIgMS4xNSAxLjE1Yy4yMi41Mi4yMiAxLjEgMCAxLjYyYy0uNDMgMS4wOC0xLjcgMS42LTIuNzggMS4xNWMtLjUtLjIxLS44OC0uNTktMS4wOS0xLjA0bTkuNTItNy43NWMwIDEuMzktMS4xMyAyLjUyLTIuNTIgMi41MmEyLjUyIDIuNTIgMCAwIDEtMi41MS0yLjUyYTIuNSAyLjUgMCAwIDEgMi41MS0yLjUxYTIuNTIgMjUuMiAwIDAgMSAyLjUyIDIuNTFtLTQuNCAwYzAgMS4wNC44NCAxLjg5IDEuODkgMS44OaDQuNiAwYTEuODkgMS44OSAwIDAgMS0xLjg5LTEuODlzLS44NC0xLjg5LTEuODgtMS44OWMtMS4wNSAwLTEuODkuODUtMS44OSAxLjg5Ii8+PC9zdmc+", iconClass: "steam-icon" },
  { id: 3, name: "MyDisney Account", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IjAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXQgZD0iTTMuMjIgNS44MzhDMS45MTMgNS42ODggMiA1LjI2IDIgNS4wNDRTMi40MjQgNCA2LjM0IDRDMTEuMDM0IDQgMjEgNy42NDUgMjEgMTQuMDQyczAtOC43MSA0LjkzMS0xMC40MzUgNC41MlM1IDE2LjMwNiA1IDE0LjM4OEM1IDEyLjk5MyA4LjA4IDEyIDExLjcxNSAxMlMxNyAxMy4wNDEgMTcgMTRjMCAuNS0uMDc0IDEuMjI5LTEgMS41Ii8+PHBhdGggZD0iTTEwLjAyIDhhNTA1IDUwNSAwIDAgMCAwIDEzIi8+PC9nPjwvc3ZnPg==", iconClass: "mydisney-icon" },
  { id: 4, name: "Sign in with Apple", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3LjA1IDIwLjI4Yy0uOTguOTUtMi4wNS44LTMuMDguMzVjLTEuMDktLjQ2LTIuMDktLjQ4LTMuMjQgMGMtMS40NC42Mi0yLjIuNDQtMy4wNi0uMzVDMi43OSAxNS4yNSAzLjUxIDcuNTkgOS4wNSA3LjMxYzEuMzUuMDcgMi4yOS43NCAzLjA4LjhhMS4xOC0uMjQgMi4zMS0uOTMgMy41Ny0uODRjMS41MS4xMiAyLjY1LjcyIDMuNCAxLjhhLTMuMTIgMS44Ny0yLjM4IDUuOTguNDggNy4xM2MtLjU3IDEuNS0xLjMxIDIuOTktMi41NCA0LjA5ek0xMi4wMyA3LjI1Yy0uMTUtMi4yMyAxLjY2LTQuMDcgMy43NC00LjI1Yy4yOSAyLjU4LTIuMzQgNC41LTMuNzQgNC4yNSIvPjwvc3ZnPg==", iconClass: "apple-icon" },
  { id: 5, name: "Facebook", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSIjMTg3N2YyIiBkPSJNMjU2IDEyOEMyNTYgNTcuMzA4IDE5OC42OTIgMCAxMjggMFMwIDU3LjMwOCAwIDEyOGMwIDYzLjg4OCA0Ni44MDggMTE2Ljg0MyAxMDggMTI2LjQ0NVYxNjVINzUuNXYtMzdIMTA4Vjk5LjhjMC0zMi4wOCAxOS4xMS00OS44IDQ4LjM0OC00OS44QzE3MC4zNTIgNTAgMTg1IDUyLjUgMTg1IDUyLjVWODRoLTE2LjE0QzE1Mi45NTkgODQgMTQ4IDkzLjg2NyAxNDggMTAzLjk5VjEyOGgzNS41bC01LjY3NSAzN0gxNDh2ODkuNDQ1YzYxLjE5Mi05LjYwMiAxMDgtNjIuNTU2IDEwOC0xMjYuNDQ1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE3Ny44MjUgMTY1bDUuNjc1LTM3SDE0OHYtMjQuMDFDMTQ4IDkzLjg2NiAxNTIuOTU5IDg0IDE2OC44NiA4NEgxODVWNTIuNVMxNzAuMzUyIDUwIDE1Ni4zNDcgNTBDMTI3LjExIDUwIDEwOCA2Ny43MiAxMDggOTkuOFYxMjhINzUuNXYzN0gxMDh2ODkuNDQ1QTEyOSAxMjkgMCAwIDAgMTI4IDI1NmExMjkgMTI5IDAgMCAwIDIwLTEuNTU1VjE2NXoiLz48L3N2Zz4=", iconClass: "facebook-icon" },
  { id: 6, name: "LEGO Account", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0icmVkIiBkPSJNMTguNDUzIDkuOTMzYS40Ni40NiAwIDAgMC0uNDQzLjIzMkExMiAxMiAwIDAgMCAxNi44NzQgMTMuMzZhLjI5NC4yOTQgMCAwIDAgLjMwNi4zMTVjLjIzNyAwIC4zNjktLjE2NC40ODYtLjM2MkExMy43IDEzLjcgMCAwIDAgMTguOTIgMTMuMjhhMTMuNyAxMy43IDAgMCAwIDEuMDQ5LTMuMDQ2Yy4wMDYtLjE1MS0uMDE1LS4zMjctLjI2Mi0uMzNNMTguNTgxIDhhMi44MiAyLjgyIDAgMDAtMi4yNjIgNUExLjMgMS4zIDAgMCAwIDE2LjA4NSA4LjdhMi40NCAyLjQ0IDAgMDAtMS45MTItLjY2NUEzLjEyIDMuMTIgMCAwIDAgMTIuMTM0IDhhMy4xMiAzLjEyIDAgMDAtMi4wMzkuNjhBMS44NSAxLjg1IDAgMCAwIDguNTA0IDhhMS44NSAxLjg1IDAgMDAtMS41OTEtLjY4N0EyLjc4IDIuNzggMCAwIDAgNC4zIDguNDQzQTEgMCAwIDAgNCAwLjc2OGExLjM4IDEuMzggMCAwIDAtMS4wMjYtLjMyN0ExLjc4IDEuNzggMCAwIDAgMS40MTQgOC4yODVjLS41NTEuODgtMS44ODkgMy43OC0xLjg1OSA1LjE4NUExLjU4MyAxLjU4MyAwIDAgMCA0LjkgMTUuNzI1YTIuNTggMi41OCAwIDAgMCAxLjk0NC0uNjM2YTIuMiAyLjIgMCAwIDAgMS42NTguNjU3YTIuNzMgMi43MyAwIDAgMCAyLjAxNS0uNzQxYTIuMiAyLjIgMCAwIDEgMS43ODMuNzVhMy4yMiAzLjIyIDAgMCAwIDIuNTE3LTEuMjM4YTIgMiAwIDAgMCAyLjAzNiAxLjIyOWMxLjk2MSAwIDIuODIyLTEuMzQ4IDMuNTQtMy40OEE4LjIgOC4yIDAgMCAwIDIxIDkuOTY5YTIgMiAwIDAgMC0uNDE5LTEuOTY5TTYuNzcyIDEzLjg5NGMtLjEgMS4wMTYtMS4wMjggMS4yNDQtMS44MzggMS4yMjVjLS41ODctLjAxNC0xLjExNi0uMjgzLTEuMTMxLS45NjVBMTMuNyAxMy43IDAgMCAxIDYuNTcyIDkuMjkxYTEuMTggMS4xOCAwIDAgMSAxLjEtLjY0OWMuNDg2IDAgLjYwNy4yNS42LjU1QTEzLjcgMTMuNyAwIDAgMSA2Ljk1OSAxMi41Yy0uMTcxLjM1Mi0uMzIuNjYxLS40MjEuODg3YzEuMDE2LS4xNzYgMS4yNjYuMTkxIDEuMjM4LjUzTTguODM4IDEyLjQyN2MtLjA2Ny4xODItLjE5NC41NjItLjMuOTY1YTMuMyAzLjMgMCAwIDEgMS4wMS0uMTMxYy40ODguMDEyLjguMjE0LjguNjE4YzAgLjk3Ni0xLjA4MSAxLjI2My0xLjgyOSAxLjI2M2ExLjM5MyAxLjM5MyAwIDAgMS0xLjU0Ni0xLjM2N0E5LjkgOS45IDAgMCAxIDguMTQ0IDkuNTQ4YTIuMjggMi4yOCAwIDAgMSAyLjQ5MS0xLjQ4MmMuNTEgMCAxLjEuMjE4IDEuMS43YzAgLjY2Ny0uNTY0LjkyMS0xLjEyNC45NTNhOCA4IDAgMCAxLS44MjguMDExYTQuNyA0LjcgMCAwIDAtLjM4NS43OWMxLjAzNy0uMTQ2IDEuNDc3LjA5IDEuMy42OWMtLjIzNS44MDktLjkzNS44NjMtMS43OTcuNzA5TTEz", iconClass: "lego-icon" },
  { id: 7, name: "Autodesk", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0ibS4xMjkgMjAuMjAybDE0LjctOS4xMzZoNy42MjVjLjIzNSAwIC40NDUuMTg4LjQ0NS40NDVjMCAuMjEtLjA5Mi4zMDUtLjIxLjM3NWwtNy4yMjIgNC4zMjNjLS40Ny4yODMtLjYzMy44NDUtLjYzMyAxLjI2NWwtLjAwOCAyLjcyNUgyNFY0LjM2MmEuNTYuNTYgMCAwIDAtLjU4NS0uNTYyaC04Ljc1MkwwIDEyLjg5M1YyMC4yaC4xMjl6Ii8+PC9zdmc+", iconClass: "autodesk-icon" }
];

function SignIn() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background-color: rgba(30, 35, 56, 0.9);
          border-radius: 12px;
          padding: 40px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          font-weight: 600;
          font-size: 28px;
          color: #fff;
        }

        .console, .pc, .other {
          background-color: rgba(40, 45, 70, 0.7);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .console > div:first-child p {
          text-align: center;
          margin-bottom: 15px;
          color: #a0a0b0;
          font-size: 14px;
          line-height: 1.4;
        }

        .play {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          margin-bottom: 10px;
          background-color: rgba(50, 55, 80, 0.5);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .play:hover {
          background-color: rgba(60, 65, 90, 0.7);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .play div:first-child {
          margin-right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play img {
          display: block;
        }

        .pc p:first-child {
          text-align: center;
          margin-bottom: 15px;
          color: #a0a0b0;
          font-size: 14px;
        }

        .pc div {
          margin-bottom: 15px;
        }

        .pc p {
          margin-bottom: 8px;
          font-size: 14px;
          color: #c0c0d0;
        }

        input[type="email"] {
          width: 100%;
          padding: 12px 15px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(30, 35, 50, 0.8);
          color: #fff;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        input[type="email"]:focus {
          outline: none;
          border-color: #0074e4;
          box-shadow: 0 0 0 2px rgba(0, 116, 228, 0.2);
        }

        .pc a {
          display: block;
          text-align: center;
          background-color: #0074e4;
          color: white;
          padding: 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .pc a:hover {
          background-color: #005bb5;
          transform: translateY(-1px);
        }

        .create {
          text-align: center;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .create a {
          color: #0074e4;
          text-decoration: none;
        }

        .create a:hover {
          text-decoration: underline;
        }

        .other p {
          text-align: center;
          margin-bottom: 15px;
          color: #a0a0b0;
          font-size: 14px;
        }

        .container > a {
          display: block;
          text-align: center;
          color: #a0a0b0;
          text-decoration: none;
          margin-top: 20px;
          font-size: 14px;
        }

        .container > a:hover {
          color: #c0c0d0;
          text-decoration: underline;
        }

        .icon-container {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
        }

        .icon-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .playstation-icon {
          border-radius: 30px;
        }

        .xbox-icon {
          background-color: green;
          padding: 5px;
        }

        .nintendo-icon {
          background-color: red;
        }

        .google-icon {
          background-color: white;
        }

        .steam-icon {
          background-color: #0B588D;
          padding: 5px;
        }

        .mydisney-icon {
          background-color: white;
          padding: 5px;
        }

        .apple-icon {
          background-color: white;
          padding: 5px;
        }

        .facebook-icon {
          background-color: #1877f2;
        }

        .lego-icon {
          background-color: yellow;
          padding: 5px;
        }

        .autodesk-icon {
          background-color: white;
          padding: 5px;
        }

        @media (max-width: 500px) {
          .container {
            padding: 25px;
          }
          
          h1 {
            font-size: 24px;
          }
          
          .play {
            padding: 10px 12px;
          }
        }
      `}</style>

      <div className="container">
        <h1>Sign in to Epic Games</h1>

        <div className="console">
          <div>
            <p>Only played on console? Sign in to access your</p>
            <p>progress and purchases.</p>
          </div>
          {consoles.map(console => (
            <div key={console.id} className="play">
              <div className={`icon-container ${console.iconClass}`}>
                <img src={console.icon} alt={console.name} />
              </div>
              <div>
                <p>{console.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pc">
          <p>Played on PC or Mobile?</p>
          <div>
            <p>Sign in with email</p>
            <input type="email" />
          </div>
          <div>
            <Link to="/">Continue</Link>
          </div>
        </div>
        
        <div className="create">
          <p>New here? <a href="">Create an account</a></p>
        </div>
        
        <div className="other">
          <p>Other ways to sign in</p>
          {others.map(other => (
            <div key={other.id} className="play">
              <div className={`icon-container ${other.iconClass}`}>
                <img src={other.icon} alt={other.name} />
              </div>
              <div>
                <p>{other.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <a href="">Trouble signing in</a>
        <a href="">Privacy Policy</a>
      </div>
    </>
  );
}

export default SignIn;
