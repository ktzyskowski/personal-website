import PdfDownloader from '../components/resume/pdf-downloader';
import Projects from '../components/resume/projects';

function Resume() {
  return (
    <div className="pt-10">
      <Projects />
      <div className="m-10" />
      <PdfDownloader />
    </div>
  )
}

export default Resume
