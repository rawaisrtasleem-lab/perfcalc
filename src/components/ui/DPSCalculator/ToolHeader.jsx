export default function ToolHeader({title,description}){

return(

<div className="text-center max-w-2xl mx-auto">

<h1 className="text-4xl font-bold">
{title}
</h1>

<p className="text-slate-400 mt-3">
{description}
</p>

</div>

)

}