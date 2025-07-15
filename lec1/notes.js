/* 01-07-2025
nodejs architecture
difference between thread and process
every process has running program whose tasks run on threads
nodejs is made up of two components namely V8 Engine (c++, js) and Lib-UV Library (c++) (event loop, thread pool)
nodejs achieves non-blocking operations
when program is run, main thread contains (project initiation, module require, top level code, callback register, event loop) stepwise (in the order provided)
event loop makes nodejs non-blocking, without event loop nodejs wouldn't be non-blocking
thread pool by default contains 4 threads
thread pool is used for cpu intensive work (file system, crypto, dns etc.) and main thread sends data to thread pool for execution
event loop decides in which order callback will be executed
phases of event loop (1. expired timer(setTimeout etc.), i/o polling(fs, request), 3. setImmediate, close callback)
close callback (pending? -- yes (back to start -- expired timer), no (exit))
callback queue and microtask queue
microtask (promise, process.nextTick())
process.nextTick() schedules a callback function to be executed immediately after the current operation finishes, but before event loop progresses to the next phase
default size of threadpool is 4 but it can be increased upto 128
*/