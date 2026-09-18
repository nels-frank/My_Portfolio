import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, ExternalLink } from "lucide-react"

export function MasterCv() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="inline-flex min-w-0 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-bold text-purple-900 shadow-md hover:bg-blue-50 md:text-base"
        >
          Download Master_CV
          <Download className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-26px)] max-w-4xl p-4 sm:w-[95vw] sm:p-6">
  <div className="h-[50vh] min-h-[320px] w-full overflow-auto rounded-md border border-slate-200">
    <iframe
      src="/documents/Adzua_Terhemen_Frank_Master_CV.pdf#page=1&view=FitH"
      title="Adzua Terhemen Frank Master CV"
      className="h-[1100px] min-w-[760px] w-full border-0"
    />
  </div>

  <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
  <div className="h-[75vh] w-full overflow-auto rounded-md">
    <iframe
      src="/documents/Adzua_Terhemen_Frank_Master_CV.pdf#page=1"
      className="h-full w-full"
      title="Adzua Terhemen Frank Master CV"
    />
  </div>

  <div className="flex justify-end gap-3 pt-3">
    <Button variant="outline" size="lg" className="h-11 px-5">
      <a href="/documents/Adzua_Terhemen_Frank_Master_CV.pdf" target="_blank" rel="noopener noreferrer">
        <ExternalLink className="mr-2 h-4 w-4" />
        Open PDF
      </a>
    </Button> 

    <Button size="lg" className="h-11 bg-blue-600 px-5 hover:bg-blue-700">
      <a href="/documents/Adzua_Terhemen_Frank_Master_CV.pdf" download="Adzua_Terhemen_Frank_Master_CV.pdf">
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </a>
    </Button>
  </div>
</DialogContent>
</DialogContent>
    </Dialog>
  )
}