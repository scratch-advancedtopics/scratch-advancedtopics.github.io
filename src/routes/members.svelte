<script lang="ts">
    import members from "$lib/members.json"
</script>
<svelte:head>
    <title>Members - Advanced Topics</title>
</svelte:head>
<div class="content">
    <h1 class="center header"><span class="light-1">/*</span> <span class="light-2">Members</span> <span class="light-1">*/</span></h1>
    <div class="flex flex-center flex-wrap">
        {#each members as member}
            <a href={`https://scratch.mit.edu/users/${member.username}`} class="exclude">
                <img src={member.profile.images["90x90"]} class="avatar flex-item" alt={members.username} />
            </a>
        {/each}
    </div>
</div>