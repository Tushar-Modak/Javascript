function Task()
{
    console.log("print the task after 3 seconds");
}
setTimeout(Task,3000);
console.log("Task 2");
function x()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function ()
        {
            console.log(i);},i*1000);
        }
}
x();

