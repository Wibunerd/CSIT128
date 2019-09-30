<?xml version="1.0" encoding="UTF-8"?>
<xml:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

<xsl:output method="xml" indent="yes" encoding="UTF-8"/>
<xsl:template match="/dailyTransaction">
<html>
    <h1>Daily Transaction: <xsl:value-of select="@date"/></h1>
    <body>
        <ul>
            <xsl:for-each select="/person">
            <li>
                <xsl:value-of select="firstName"/>
                <xsl:text> </xsl:text>
                <xsl:value-of select="lastName"/>
                <xsl:text>, </xsl:text>
                <xsl:value-of select="mobile"/>
                <xsl:text>, </xsl:text>
                <xsl:value-of select="@staffDbId"/>
                <xsl:text>, </xsl:text>
                <xsl:value-of select="@operation"/>
            </li>
            </xsl:for-each>
        </ul>
    </body>
</html>
</xsl:template>
</xml:stylesheet>