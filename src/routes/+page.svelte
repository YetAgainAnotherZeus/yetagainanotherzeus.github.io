<script>
	import Skill from '$lib/Skill.svelte';
	import Project from '$lib/Project.svelte';

	import PhArrowSquareOutLight from 'virtual:icons/ph/arrow-square-out-light';
	import IGithubDark from 'virtual:icons/skills/github-dark';
	import IDocker from 'virtual:icons/skills/docker';
	import INodejsDark from 'virtual:icons/skills/nodejs-dark';
	import IExpressjsDark from 'virtual:icons/skills/expressjs-dark';
	import IJavascript from 'virtual:icons/skills/javascript';
	import ITypescript from 'virtual:icons/skills/typescript';
	import IPostgresqlDark from 'virtual:icons/skills/postgresql-dark';
	import IPrisma from 'virtual:icons/skills/prisma';
	import ISequelizeDark from 'virtual:icons/skills/sequelize-dark';
	import IHtml from 'virtual:icons/skills/html';
	import ICss from 'virtual:icons/skills/css';
	import ITailwindcssDark from 'virtual:icons/skills/tailwindcss-dark';
	import ISvelte from 'virtual:icons/skills/svelte';
	import IRust from 'virtual:icons/skills/rust-dark';
	import IPythonDark from 'virtual:icons/skills/python-dark';
	import IVscodeDark from 'virtual:icons/skills/vscode-dark';
    import ISurrealdb from 'virtual:icons/skills/surrealdb-dark';
    import ITauri from 'virtual:icons/skills/tauri-dark';
	import Experience from '$lib/Experience.svelte';
</script>

<main
	class="flex flex-col justify-center items-center w-screen h-screen bg-neutral-900 text-neutral-400"
>
	<div class="max-w-[80%] space-y-4">
		<section>
			<h1 class="title">Pierre Couturier</h1>
			<h2 class="subtitle">Back-End Developer</h2>
			<p class="paragraph">
				Passionate about computer science since a young age, I have self-taught skills in
				development through self-guided learning and hands-on projects. My journey as a self-taught
				developer has driven me to continuously seek opportunities to further enhance my knowledge
				and apply it in real-world scenarios. I am now eager to join a forward-thinking company to
				contribute my expertise and continue my growth in the field of development.
			</p>
		</section>
		<section>
			<h2 class="title mb-1">Skills</h2>
			<div class="flex gap-2 flex-wrap">
				<Skill title="Github" website="https://github.com/">
					<IGithubDark class="size-8" />
				</Skill>
				<Skill title="Docker" website="https://www.docker.com/">
					<IDocker class="size-8" />
				</Skill>
				<Skill title="NodeJS" website="https://nodejs.org/en">
					<INodejsDark class="size-8" />
				</Skill>
				<Skill title="ExpressJS" website="https://expressjs.com/">
					<IExpressjsDark class="size-8" />
				</Skill>
				<Skill title="JavaScript" website="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
					<IJavascript class="size-8" />
				</Skill>
				<Skill title="TypeScript" website="https://www.typescriptlang.org/">
					<ITypescript class="size-8" />
				</Skill>
				<Skill title="PostgreSQL" website="https://www.postgresql.org/">
					<IPostgresqlDark class="size-8" />
				</Skill>
				<Skill title="Prisma" website="https://www.prisma.io/">
					<IPrisma class="size-8" />
				</Skill>
				<Skill title="Sequelize" website="https://sequelize.org/">
					<ISequelizeDark class="size-8" />
				</Skill>
				<Skill title="HTML" website="https://developer.mozilla.org/en-US/docs/Web/HTML">
					<IHtml class="size-8" />
				</Skill>
				<Skill title="CSS" website="https://developer.mozilla.org/en-US/docs/Web/CSS">
					<ICss class="size-8" />
				</Skill>
				<Skill title="TailwindCSS" website="https://tailwindcss.com/">
					<ITailwindcssDark class="size-8" />
				</Skill>
				<Skill title="Svelte" website="https://kit.svelte.dev/">
					<ISvelte class="size-8" />
				</Skill>
				<Skill title="Rust" website="https://www.rust-lang.org/">
					<IRust class="size-8" />
				</Skill>
				<Skill title="Python" website="https://www.python.org/">
					<IPythonDark class="size-8" />
				</Skill>
				<Skill title="VSCode" website="https://code.visualstudio.com/">
					<IVscodeDark class="size-8" />
				</Skill>
                <Skill title="SurrealDB" website="https://surrealdb.com/">
                    <ISurrealdb class="size-8" />
                </Skill>
                <Skill title="Tauri" website="https://tauri.app/">
                    <ITauri class="size-8" />
                </Skill>
			</div>
		</section>
		<section>
			<h2 class="title">Projects</h2>
			<Project
				title="Portfolio"
				website="https://github.com/YetAgainAnotherZeus/yetagainanotherzeus.github.io"
				date="2024"
			/>
            <Project
				title="Cardinal (A typescript discord bot)"
				website="https://github.com/YetAgainAnotherZeus/cardinal"
				date="2024"
			/>
		</section>
		<section>
			<h2 class="title">Experience</h2>
			<a
				href="mailto:p.couturier3400@gmail.com"
				class="flex items-center gap-1 hover:text-neutral-300"
				>No experience. Click here to expand the list. <PhArrowSquareOutLight /></a
			>
		</section>
	</div>
</main>

<style lang="postcss">
	.title {
		@apply text-white font-semibold tracking-wide;
	}

	.subtitle {
		@apply text-neutral-600 text-sm font-medium;
	}

	.paragraph {
		@apply break-words mt-2;
	}
</style>
