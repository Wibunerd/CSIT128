<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xlmns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xlmns="http://www.w3.org/1999/xhtml">
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
            </body>
        </html>
    </xsl:template>>
</xsl:stylesheet>>


