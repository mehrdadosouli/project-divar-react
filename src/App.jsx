import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import reactQuery from "./config/reactQuery"
import defaultOptions from "./config/reactQuery"

function App() {
const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}


export default App
