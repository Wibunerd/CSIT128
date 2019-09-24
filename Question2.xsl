<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
    <xsl:template match="/patron">
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <h1>
                    <xsl:text>Patron Record: </xsl:text>
                    <xsl:value-of select="name"/>
                </h1>
                <br/><br/>
                <xsl:for-each select="item">
                    <xsl:value-of select="title"/><br/>
                    <xsl:value-of select="authors"/><br/>
                    <xsl:value-of select="number"/><br/>
                    <xsl:value-of select="due"/><br/>
                    <xsl:if test="@overdue='yes'">
                        <xsl:value-of select="@overdue"/>
                    </xsl:if>

                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


