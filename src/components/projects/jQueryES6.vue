<script setup>
    import projectVue from '../project.vue';

  const tableJquery = `
    // jQuery
    function setupTables() {
        var tables = $f('div.table.split, table.split');
        tables.each(function(){
    
            var newLayout = $f('<table class="msplit table"><tbody></tbody></table>');
    
            // Split the rows up into the header row (<th/>) and data rows (<td/>).
            var table = $f(this);
            var rows = table.find('tr');
            var headings = rows.eq(0).children();
            var dataRows = rows.slice(1);
    
            dataRows.each(function(){
                var row = $f(this);
                var columns = row.children();
    
                columns.each(function(index){
                    var heading = headings.eq(index).html();
                    var data = $f(this).html();
                    if( index % headings.length === 0 ) {
                        // new "column"
                        newLayout.append('<tr><th colspan="2">' + data + '</th></tr>');
                    }
                    else {
                        newLayout.append('<tr><td>' + heading + '</td><td>' + data + '</td></tr>');
                    }
                });
            });
    
            // Display new headings and data
            table.after(newLayout);
        });
    }
    `;

    const tableJs = `
    // vanilla JS
    function setupTables() {
        var tables = document.querySelectorAll('div.table.split, table.split');
        [...tables].forEach(table => {
            // find first row
            allRows = table.getElementsByTagName('tr');
            firstRow = allRows[0];
            const [, ...dataRows] = allRows;
    
            dataRows.forEach(data => {
                cells = data.getElementsByTagName('td');
                for (let i = 0; i < cells.length; i++) {
                    cells[i].setAttribute('data-label', firstRow.children[i].textContent)
                }
            });
        });
    }`;

    const clickableJquery = `
    // jQuery
    function clickableContainer(target){
        target.on('click', function(e) {
            var self = $f(this);
            var a = self.find('a');
            var href = a.attr('href');
    
            if (a && a.hasClass("confirm")) {
                initBb(href, alertText);
            } else if (a && a.hasClass("warn")) {
                initBb(href, warnText);
            } else if( href.indexOf('.pdf') >= 0 || a.attr('target') == '_blank') {
                window.open(href);
            } else if (a) {
                window.location = href;
            }
    
        }).addClass('clickable');
    
        target.find('a').on('click', function(e) {
            e.stopPropagation();
        });
    }`;

    const clickableJs = `
    // vanilla JS
    function clickableContainer(target){
        var targets = document.querySelectorAll(target);
        [...targets].forEach(target => {
            const posValue = getComputedStyle(target);
            const targetLink = target.getElementsByTagName('a')[0];
            if (posValue.position == 'static') { target.style.position = "relative"; }
            targetLink.classList.add('stretched-link');
            targetLink.style.position = "static";
            target.classList.add('clickable');
    
            var targetLinkContentWrapper = document.createElement('span');
            targetLinkContentWrapper.append(...targetLink.childNodes);
            targetLink.appendChild(targetLinkContentWrapper);
        });
    
    }
    `;
</script>

<template>

    <projectVue
        title="jQuery -&gt; Javascript"
        summary="As the owner of the FIRSTBranch codebase, I constantly sought out opportunities to improve and modernize functions and
                reduce dependencies on 3rd party libraries. A security vulnerability in jQuery required a special project to upgrade all sites using 
                any version of jQuery to be updated to at least version 3.3. To prevent a similar issue in the future, I decided
                to update our entire codebase to remove jQuery as a dependency."
        >

        <template #code>
            <h3>Mobile-friendly tables</h3>
             <pre v-highlightjs="tableJquery"><code class="javascript"></code></pre>
            <pre v-highlightjs="tableJs"><code class="javascript"></code></pre>
                


            <h3>Clickable containers</h3>
            <p>Leveraged the built-in "stretched link" feature of Bootstrap 5 instead of using a custom function to accomplish the same thing.</p>

               <pre v-highlightjs="clickableJquery"><code class="javascript"></code></pre>
            <pre v-highlightjs="clickableJs"><code class="javascript"></code></pre>
              
        </template>
    </projectVue>
    
</template>
