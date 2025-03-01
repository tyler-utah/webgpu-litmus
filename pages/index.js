import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <p>
      WebGPU Litmus is a website that can be used to test the WebGPU memory model using litmus tests, which are small concurrent programs designed to showcase the semantics of the memory model.
    </p>

    <p>
      In order to run theses tests, you must be using Chrome Canary and have the flag &quot;--enable-unsafe-webgpu&quot; enabled.
    </p>
  </main>
  )
}
