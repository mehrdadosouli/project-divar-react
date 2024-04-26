import { BrowserRouter } from "react-router-dom"
import Routers from "./routes/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import defaultOptions from "./config/reactQuery"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {
const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routers />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  )
}


export default App
